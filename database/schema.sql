-- TC ACADEMY Database Schema
-- Complete academic platform with virtual labs

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS public.users (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('ceo', 'lecturer', 'student')),
  country TEXT NOT NULL,
  student_number TEXT UNIQUE,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Academic Programs
CREATE TABLE IF NOT EXISTS public.programs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('diploma', 'bachelor', 'honours', 'masters')),
  duration_years INTEGER NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Modules/Subjects
CREATE TABLE IF NOT EXISTS public.modules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  program_id UUID REFERENCES public.programs(id) ON DELETE CASCADE,
  level TEXT NOT NULL CHECK (level IN ('diploma', 'bachelor', 'honours', 'masters')),
  credits INTEGER DEFAULT 0,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lessons/Topics within modules
CREATE TABLE IF NOT EXISTS public.lessons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  module_id UUID REFERENCES public.modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  video_url TEXT,
  duration_minutes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Assessments (Tests, Tasks, Activities)
CREATE TABLE IF NOT EXISTS public.assessments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  module_id UUID REFERENCES public.modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('test', 'task', 'activity', 'challenge', 'lab')),
  description TEXT,
  questions JSONB,
  max_score INTEGER DEFAULT 100,
  passing_score INTEGER DEFAULT 50,
  time_limit_minutes INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Virtual Labs
CREATE TABLE IF NOT EXISTS public.virtual_labs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  module_id UUID REFERENCES public.modules(id) ON DELETE CASCADE,
  lab_type TEXT NOT NULL CHECK (lab_type IN ('networking', 'programming', 'database', 'cybersecurity', 'web')),
  environment_url TEXT,
  instructions TEXT,
  tools_required JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Student Enrollments
CREATE TABLE IF NOT EXISTS public.enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  program_id UUID REFERENCES public.programs(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'suspended')),
  UNIQUE(user_id, program_id)
);

-- Student Progress in Modules
CREATE TABLE IF NOT EXISTS public.module_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  module_id UUID REFERENCES public.modules(id) ON DELETE CASCADE,
  progress_percentage INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(user_id, module_id)
);

-- Assessment Results
CREATE TABLE IF NOT EXISTS public.assessment_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  assessment_id UUID REFERENCES public.assessments(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  max_score INTEGER NOT NULL,
  percentage DECIMAL(5,2),
  answers JSONB,
  feedback TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Virtual Lab Sessions
CREATE TABLE IF NOT EXISTS public.lab_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  lab_id UUID REFERENCES public.virtual_labs(id) ON DELETE CASCADE,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  duration_minutes INTEGER,
  results JSONB,
  status TEXT DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed', 'failed'))
);

-- Messages
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Rankings
CREATE TABLE IF NOT EXISTS public.rankings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE UNIQUE,
  global_rank INTEGER,
  local_rank INTEGER,
  country TEXT NOT NULL,
  total_points INTEGER DEFAULT 0,
  modules_completed INTEGER DEFAULT 0,
  avg_score DECIMAL(5,2) DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.virtual_labs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.module_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lab_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rankings ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public read users" ON public.users FOR SELECT USING (true);
CREATE POLICY "Users update own" ON public.users FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Public read programs" ON public.programs FOR SELECT USING (true);
CREATE POLICY "Public read modules" ON public.modules FOR SELECT USING (true);
CREATE POLICY "Public read lessons" ON public.lessons FOR SELECT USING (true);
CREATE POLICY "Public read assessments" ON public.assessments FOR SELECT USING (true);
CREATE POLICY "Public read labs" ON public.virtual_labs FOR SELECT USING (true);

CREATE POLICY "Users read own enrollments" ON public.enrollments FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users insert own enrollments" ON public.enrollments FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users read own progress" ON public.module_progress FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users update own progress" ON public.module_progress FOR ALL USING (user_id = auth.uid());

CREATE POLICY "Users read own results" ON public.assessment_results FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users submit results" ON public.assessment_results FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users read own lab sessions" ON public.lab_sessions FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users manage own lab sessions" ON public.lab_sessions FOR ALL USING (user_id = auth.uid());

CREATE POLICY "Users read own messages" ON public.messages FOR SELECT USING (sender_id = auth.uid() OR receiver_id = auth.uid());
CREATE POLICY "Users send messages" ON public.messages FOR INSERT WITH CHECK (sender_id = auth.uid());

CREATE POLICY "Public read rankings" ON public.rankings FOR SELECT USING (true);

-- Insert TC Academy Programs
INSERT INTO public.programs (name, level, duration_years, description) VALUES
('Diploma in Information Technology', 'diploma', 2, 'Foundation program covering core IT concepts'),
('Bachelor of Information Technology', 'bachelor', 3, 'Comprehensive undergraduate IT degree'),
('Bachelor of Computer Science', 'bachelor', 3, 'Computer science focused bachelor degree'),
('Honours in Information Technology', 'honours', 1, 'Advanced IT specialization'),
('Master of Information Technology', 'masters', 2, 'Postgraduate IT degree');

-- Insert Core Modules
INSERT INTO public.modules (code, name, level, credits, description) VALUES
-- Diploma Level
('IPDO101', 'Introduction to Programming & Database Operations', 'diploma', 12, 'Fundamentals of programming and database concepts'),
('PIS101', 'Programming & Information Systems', 'diploma', 12, 'Core programming and system design'),
('CA101', 'Computer Applications', 'diploma', 10, 'Office applications and productivity tools'),
('MATH101', 'Mathematics for IT', 'diploma', 10, 'Essential mathematics for IT professionals'),
('NET101', 'Networking Fundamentals', 'diploma', 12, 'Introduction to computer networks'),
('WEB101', 'Web Development Basics', 'diploma', 10, 'HTML, CSS, and basic web technologies'),

-- Bachelor Level
('PROG201', 'Advanced Programming', 'bachelor', 15, 'Object-oriented and advanced programming concepts'),
('DB201', 'Database Management Systems', 'bachelor', 15, 'Advanced database design and SQL'),
('NET201', 'Network Administration', 'bachelor', 15, 'Network design and administration'),
('SEC201', 'Cybersecurity Fundamentals', 'bachelor', 15, 'Introduction to information security'),
('WEB201', 'Full-Stack Web Development', 'bachelor', 15, 'Complete web application development'),
('SOFT201', 'Software Engineering', 'bachelor', 15, 'Software development lifecycle and methodologies'),

-- Honours Level
('ADV301', 'Advanced Algorithms', 'honours', 20, 'Complex algorithms and data structures'),
('CLOUD301', 'Cloud Computing', 'honours', 20, 'Cloud platforms and services'),
('AI301', 'Artificial Intelligence', 'honours', 20, 'Machine learning and AI fundamentals'),
('CYBER301', 'Advanced Cybersecurity', 'honours', 20, 'Penetration testing and security analysis'),

-- Masters Level
('RES401', 'Research Methods in IT', 'masters', 25, 'Academic research in information technology'),
('BIGDATA401', 'Big Data Analytics', 'masters', 25, 'Large-scale data processing and analysis'),
('IOTSEC401', 'IoT and Security', 'masters', 25, 'Internet of Things and security considerations'),
('THESIS401', 'Master Thesis', 'masters', 30, 'Independent research project');

-- Indexes
CREATE INDEX idx_modules_level ON public.modules(level);
CREATE INDEX idx_modules_code ON public.modules(code);
CREATE INDEX idx_enrollments_user ON public.enrollments(user_id);
CREATE INDEX idx_progress_user ON public.module_progress(user_id);
CREATE INDEX idx_results_user ON public.assessment_results(user_id);
CREATE INDEX idx_messages_receiver ON public.messages(receiver_id);
