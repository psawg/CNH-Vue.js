import { createClient } from "@supabase/supabase-js";

// 🔹 Lấy trong Supabase → Project Settings → API Key
const supabaseUrl = "https://mxvwoiiareecyxyctbxl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14dndvaWlhcmVlY3l4eWN0YnhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4OTg1ODYsImV4cCI6MjA3NzQ3NDU4Nn0.JkMtTcZaTVU-WxheEgyBe-BuHpd0DWIfiv50JW8etZ0";

// 🔹 Tạo client kết nối
export const supabase = createClient(supabaseUrl, supabaseKey);
