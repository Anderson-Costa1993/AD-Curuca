import { createClient } from "@supabase/supabase-js";

const projectURL = "https://glmotquusglvbwopldjz.supabase.co";
const keyProject =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsbW90cXV1c2dsdmJ3b3BsZGp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzNjEzOTcsImV4cCI6MjAyMDkzNzM5N30.A7XCUAqaA61SN5IIROD9kVen1TAm9dlBLh-9AsgY80o";

  export const supabase = createClient(projectURL, keyProject);