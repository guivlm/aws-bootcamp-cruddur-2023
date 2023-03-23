-- this file was manually created
INSERT INTO public.users (display_name, handle, email, cognito_user_id)
VALUES
  ('Guilherme Monteiro', 'guivlm' , 'guivlm.sp@gmail.com', 'MOCK'),
  ('Bayko', 'bayko', 'gmonteiro@outlook.com.br', 'MOCK'),
  ('Juliana', 'JuJu', 'juliana_cris_tol@hotmail.com', 'MOCK');

INSERT INTO public.activities (user_uuid, message, expires_at)
VALUES
  (
    (SELECT uuid from public.users WHERE users.handle = 'guivlm' LIMIT 1),
    'This was imported as seed data!',
    current_timestamp + interval '10 day'
  )