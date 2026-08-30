# Libris Ambient Worker v1

Ambient voice/Discord worker for Libris.

## Safety boundary

This worker is isolated from the existing Libris WSE engine and existing Supabase schema/functions.

The worker will communicate only with an explicitly configured Ambient Gateway endpoint.

No secrets belong in this repository.

## Status

Initial scaffold.

The Discord voice adapter will be added only after the existing Ambient Gateway contract is verified.
