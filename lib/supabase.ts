
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

const supabaseUrl = 'https://zzftrjdkliphmzgepeuu.supabase.co';
const supabaseAnonKey = 'sb_publishable_4q-FRu5ldgQMkom4T8-SnA_MzyYzMLB';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
