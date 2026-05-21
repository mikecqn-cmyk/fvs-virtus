create table if not exists public.fvs_inspections (
  id text primary key,
  obra_nome text not null,
  service_code text not null,
  service_name text not null,
  lote text,
  torre text,
  local_pavimento text,
  frente text,
  data_inspecao date,
  status_sugerido text,
  form_data jsonb not null default '{}'::jsonb,
  fvs_state jsonb not null default '{}'::jsonb,
  html text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.fvs_files (
  id uuid primary key default gen_random_uuid(),
  inspection_id text not null references public.fvs_inspections(id) on delete cascade,
  field_key text,
  file_name text not null,
  file_type text,
  storage_path text not null,
  public_url text,
  created_at timestamptz not null default now()
);

create index if not exists fvs_inspections_lote_idx on public.fvs_inspections (lote);
create index if not exists fvs_inspections_service_idx on public.fvs_inspections (service_code);
create index if not exists fvs_inspections_data_idx on public.fvs_inspections (data_inspecao);
create index if not exists fvs_files_inspection_idx on public.fvs_files (inspection_id);

insert into storage.buckets (id, name, public)
values ('fvs-evidencias', 'fvs-evidencias', true)
on conflict (id) do nothing;

alter table public.fvs_inspections enable row level security;
alter table public.fvs_files enable row level security;

drop policy if exists "fvs_inspections_insert" on public.fvs_inspections;
drop policy if exists "fvs_inspections_select" on public.fvs_inspections;
drop policy if exists "fvs_inspections_update" on public.fvs_inspections;
drop policy if exists "fvs_files_insert" on public.fvs_files;
drop policy if exists "fvs_files_select" on public.fvs_files;

create policy "fvs_inspections_insert"
on public.fvs_inspections for insert
to anon
with check (true);

create policy "fvs_inspections_select"
on public.fvs_inspections for select
to anon
using (true);

create policy "fvs_inspections_update"
on public.fvs_inspections for update
to anon
using (true)
with check (true);

create policy "fvs_files_insert"
on public.fvs_files for insert
to anon
with check (true);

create policy "fvs_files_select"
on public.fvs_files for select
to anon
using (true);

drop policy if exists "fvs_evidencias_upload" on storage.objects;
drop policy if exists "fvs_evidencias_read" on storage.objects;

create policy "fvs_evidencias_upload"
on storage.objects for insert
to anon
with check (bucket_id = 'fvs-evidencias');

create policy "fvs_evidencias_read"
on storage.objects for select
to anon
using (bucket_id = 'fvs-evidencias');
