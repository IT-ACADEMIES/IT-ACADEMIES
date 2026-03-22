import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// TC Academy Types
export type UserRole = 'ceo' | 'lecturer' | 'student'
export type QualificationLevel = 'diploma' | 'bachelor' | 'honours' | 'masters'
export type AssessmentType = 'test' | 'task' | 'activity' | 'challenge' | 'lab'
export type LabType = 'networking' | 'programming' | 'database' | 'cybersecurity' | 'web'

export interface User {
  id: string
  email: string
  full_name: string
  role: UserRole
  country: string
  student_number?: string
  avatar_url?: string
  bio?: string
  created_at: string
}

export interface Program {
  id: string
  name: string
  level: QualificationLevel
  duration_years: number
  description?: string
  created_at: string
}

export interface Module {
  id: string
  code: string
  name: string
  program_id: string
  level: QualificationLevel
  credits: number
  description?: string
  created_at: string
}

export interface Lesson {
  id: string
  module_id: string
  title: string
  content: string
  order_index: number
  video_url?: string
  duration_minutes: number
  created_at: string
}

export interface Assessment {
  id: string
  module_id: string
  title: string
  type: AssessmentType
  description?: string
  questions?: any
  max_score: number
  passing_score: number
  time_limit_minutes?: number
  created_at: string
}

export interface VirtualLab {
  id: string
  name: string
  module_id: string
  lab_type: LabType
  environment_url?: string
  instructions?: string
  tools_required?: any
  created_at: string
}

export interface Enrollment {
  id: string
  user_id: string
  program_id: string
  enrolled_at: string
  status: 'active' | 'completed' | 'suspended'
}

export interface ModuleProgress {
  id: string
  user_id: string
  module_id: string
  progress_percentage: number
  completed: boolean
  started_at: string
  completed_at?: string
}

export interface AssessmentResult {
  id: string
  user_id: string
  assessment_id: string
  score: number
  max_score: number
  percentage: number
  answers?: any
  feedback?: string
  submitted_at: string
}

export interface LabSession {
  id: string
  user_id: string
  lab_id: string
  started_at: string
  completed_at?: string
  duration_minutes?: number
  results?: any
  status: 'in_progress' | 'completed' | 'failed'
}

export interface Message {
  id: string
  sender_id: string
  receiver_id: string
  content: string
  read: boolean
  created_at: string
}

export interface Ranking {
  id: string
  user_id: string
  global_rank?: number
  local_rank?: number
  country: string
  total_points: number
  modules_completed: number
  avg_score: number
  updated_at: string
}

// Helper function to check if user is CEO
export async function checkIsCEO(userId: string): Promise<boolean> {
  const { data } = await supabase
    .from('users')
    .select('role')
    .eq('id', userId)
    .single()
  
  return data?.role === 'ceo'
}

// Helper to make first registered user CEO
export async function makeFirstUserCEO(userId: string, email: string): Promise<void> {
  // Check if this is the first user
  const { count } = await supabase
    .from('users')
    .select('*', { count: 'exact', head: true })
  
  // If this is the first user (count will be 0 before insert), they become CEO
  if (count === 0) {
    await supabase
      .from('users')
      .update({ role: 'ceo' })
      .eq('id', userId)
  }
}
