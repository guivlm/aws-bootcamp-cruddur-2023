-- this file was manually created
INSERT INTO public.users (display_name, handle, email, cognito_user_id)
VALUES
  ('Guilherme Monteiro', 'guivlm' , 'guivlm.sp@gmail.com', '5ad543e4-b370-44ce-86fb-fc286a452241'),
  ('Bayko', 'bayko', 'gmonteiro@outlook.com.br', 'abbe5dfd-8e57-4685-afb4-a68bcb0c9ab0'),
  ('Juliana', 'JuJu', 'juliana_cris_tol@hotmail.com', '91824b0a-1b2b-4e6a-94f9-e5ba7e3785bb');

INSERT INTO public.activities (user_uuid, message, expires_at)
VALUES
  (
    (SELECT uuid from public.users WHERE users.handle = 'guivlm' LIMIT 1),
    'This was imported as seed data!',
    current_timestamp + interval '10 day'
  )