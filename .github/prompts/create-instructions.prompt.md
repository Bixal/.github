---
mode: agent
---

## Task
create an instructions file from the template

When you receive a request, create a new instructions file based on
`.github/instructions/template.instructions.md`.

## Expectations
- Require a single `name` argument (base name only, no path or extension).
- If `name` is not provided, ask: "Please provide a name for the instructions file (base name only):" and wait for user input.
- The created file path must be `.github/instructions/<name>.instructions.md` (note the exact spelling of the extension).
- Do not overwrite an existing file unless the user explicitly confirms. If the target file exists, ask: "File `.github/instructions/<name>.instructions.md` exists. Confirm overwrite? (yes/no)" and wait for a clear affirmative `yes` before overwriting.

Interaction examples:
- User: `create instructions name=onboarding` -> Create `.github/instructions/onboarding.instructions.md` from template, filling `{{name}}` with `onboarding`.
- User: `create instructions` -> Ask for `name` before proceeding.

Safety:
- Never create files outside `.github/instructions/` unless the user explicitly requests a different directory.

Notes:
- Ensure the file is valid Markdown and follows the structure of the template.
- Use relevant project details to fill sections like Tech Stack, Key Files, etc.
- If unsure about project specifics, use placeholders and ask the user for clarification.
- Ensure the generated file is optimized for clarity, usefulness to developers, and token efficiency.
- After creating the file, respond with: "Instructions file `.github/instructions/<name>.instructions.md` created successfully."


