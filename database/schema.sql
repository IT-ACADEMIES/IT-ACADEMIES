-- IT Academies Nam Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE public.users (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('ceo', 'lecturer', 'student')),
  country TEXT NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Courses table
CREATE TABLE public.courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN (
    'programming', 
    'cybersecurity', 
    'web-development', 
    'networking', 
    'database', 
    'cloud-computing',
    'data-science',
    'mobile-development',
    'devops',
    'software-engineering'
  )),
  level TEXT NOT NULL CHECK (level IN ('diploma', 'bachelor', 'master', 'phd')),
  instructor_id UUID REFERENCES public.users(id),
  thumbnail_url TEXT,
  duration_hours INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Modules table
CREATE TABLE public.modules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lessons table
CREATE TABLE public.lessons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  module_id UUID REFERENCES public.modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  video_url TEXT,
  order_index INTEGER NOT NULL,
  duration_minutes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Quizzes table
CREATE TABLE public.quizzes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  questions JSONB NOT NULL,
  passing_score INTEGER DEFAULT 70,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enrollments table
CREATE TABLE public.enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  progress INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(user_id, course_id)
);

-- Messages table
CREATE TABLE public.messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Rankings table
CREATE TABLE public.rankings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE UNIQUE,
  global_rank INTEGER,
  local_rank INTEGER,
  country TEXT NOT NULL,
  total_points INTEGER DEFAULT 0,
  courses_completed INTEGER DEFAULT 0,
  avg_score DECIMAL(5,2) DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Quiz Results table
CREATE TABLE public.quiz_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  quiz_id UUID REFERENCES public.quizzes(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  answers JSONB NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rankings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view all profiles" ON public.users FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.users FOR UPDATE USING (auth.uid() = id);

-- Courses policies
CREATE POLICY "Anyone can view courses" ON public.courses FOR SELECT USING (true);

-- Modules policies
CREATE POLICY "Anyone can view modules" ON public.modules FOR SELECT USING (true);

-- Lessons policies
CREATE POLICY "Anyone can view lessons" ON public.lessons FOR SELECT USING (true);

-- Quizzes policies
CREATE POLICY "Anyone can view quizzes" ON public.quizzes FOR SELECT USING (true);

-- Enrollments policies
CREATE POLICY "Users can view own enrollments" ON public.enrollments FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Students can enroll in courses" ON public.enrollments FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users can update own enrollments" ON public.enrollments FOR UPDATE USING (user_id = auth.uid());

-- Messages policies
CREATE POLICY "Users can view own messages" ON public.messages FOR SELECT USING (sender_id = auth.uid() OR receiver_id = auth.uid());
CREATE POLICY "Users can send messages" ON public.messages FOR INSERT WITH CHECK (sender_id = auth.uid());

-- Rankings policies
CREATE POLICY "Anyone can view rankings" ON public.rankings FOR SELECT USING (true);

-- Quiz Results policies
CREATE POLICY "Users can view own results" ON public.quiz_results FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can submit quiz results" ON public.quiz_results FOR INSERT WITH CHECK (user_id = auth.uid());
