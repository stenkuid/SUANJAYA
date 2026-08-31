# AI DEVELOPMENT & DESIGN CONTROL PROTOCOL

## Project Protocol

This document defines the mandatory operating rules for all AI agents working on this project.

All instructions in this file must be read and followed before modifying any project file.

The primary purpose of this protocol is to preserve approved design states, prevent unintended redesigns, control AI modifications, and provide a predictable command system for development.

---

# 1. CORE PRINCIPLE

The AI agent must treat the existing approved project state as valuable and protected.

The AI must NEVER assume that an existing implementation should be improved, modernized, refactored, redesigned, simplified, or replaced unless the user explicitly requests it.

When the user's request is narrow, the modification must remain narrow.

The AI must preserve:

- Existing approved layouts
- Existing visual hierarchy
- Existing typography
- Existing spacing
- Existing colors
- Existing images
- Existing responsive behavior
- Existing interactions
- Existing functionality

unless explicitly instructed otherwise.

---

# 2. PROTOCOL PRIORITY

When interpreting instructions, use the following priority order:

1. Explicit user instruction
2. Active protocol command
3. Locked component rules
4. Approved checkpoint rules
5. Existing project implementation
6. General design or coding preferences

The AI must not override a higher-priority instruction with a lower-priority assumption.

---

# 3. BEFORE EVERY MODIFICATION

Before modifying any file, the AI must:

1. Read this `PROTOCOL.md`.
2. Identify the active protocol command.
3. Identify the exact component or files that need modification.
4. Check whether the target component is locked.
5. Preserve all unrelated components.
6. Avoid modifying files that are outside the requested scope.

The AI must NOT begin a broad redesign simply because a requested change affects part of the page.

---

# 4. MINIMAL CHANGE PRINCIPLE

The AI must make the smallest reasonable modification necessary to fulfill the user's request.

The AI must NOT:

- Rewrite unrelated components.
- Refactor unrelated code.
- Change the design system.
- Replace existing layouts without permission.
- Change typography without permission.
- Change spacing without permission.
- Replace images without permission.
- Change colors without permission.
- Modify responsive behavior outside the requested scope.
- Remove functionality unless explicitly requested.

If a requested modification can be completed by changing one component, the AI must not rewrite the entire page.

---

# 5. DESIGN PRESERVATION RULE

Existing design is considered protected by default.

The AI must NOT interpret requests such as:

- "Improve this"
- "Make this better"
- "Fix this"
- "Add this feature"

as permission to redesign unrelated sections.

If the request does not explicitly request redesign, preserve the existing visual appearance.

---

# 6. EXACT RESTORATION RULE

When restoring a previous state, the AI must restore the exact known implementation.

The AI must NOT:

- Recreate the design from memory.
- Generate a similar design.
- Approximate the previous layout.
- Improve the previous version.
- Modernize the previous version.
- Combine the previous design with the current design.

Restoration means restoring the previous code state as accurately as possible.

The AI must always prefer:

1. Git history
2. Git commit
3. Git diff
4. Existing backup
5. Explicit checkpoint reference

The AI must never guess the previous implementation if an exact source is available.

---

# 7. PROTOCOL COMMAND SYSTEM

Commands beginning with `/` are protocol commands.

Protocol commands must be interpreted according to this document.

The AI must execute the command according to its definition.

The AI must not reinterpret the meaning of a protocol command.

---

# 8. /REVERSE

## Purpose

Undo the latest unapproved modification.

## Execution Rules

When `/REVERSE` is activated:

1. Identify the latest modification made for the current task.
2. Identify all files affected by that modification.
3. Restore those files to their exact state before that modification.
4. Preserve all older approved changes.
5. Do not redesign anything.
6. Do not generate an alternative implementation.
7. Do not improve the restored version.
8. Do not modify unrelated files.

The AI must treat `/REVERSE` as:

"Restore the exact previous state."

The AI must NOT interpret `/REVERSE` as:

"Create something similar to the previous design."

After restoration, stop modifying the project unless the user provides another instruction.

---

# 9. /CHECKPOINT [NAME]

## Purpose

Create a named approved state.

Example:

`/CHECKPOINT homepage-v1`

When activated:

1. Identify the current project state.
2. Record the checkpoint name.
3. Record the relevant files associated with the checkpoint.
4. Record the purpose of the checkpoint.
5. Treat this state as an approved reference.

A checkpoint should preferably correspond to a Git commit whenever possible.

---

# 10. /RESTORE [NAME]

## Purpose

Restore a previously approved checkpoint.

Example:

`/RESTORE homepage-v1`

When activated:

1. Locate the exact checkpoint.
2. Identify its associated files or Git commit.
3. Restore the exact code state.
4. Do not reinterpret the design.
5. Do not merge the checkpoint with experimental changes unless explicitly requested.

The checkpoint is the source of truth.

---

# 11. /LOCK [COMPONENT]

## Purpose

Protect an approved component from modification.

Example:

`/LOCK HERO`

When a component is locked, the AI must NOT modify:

- Layout
- HTML structure
- CSS styling
- Typography
- Spacing
- Colors
- Images
- Animations
- Responsive behavior
- Component logic

unless explicitly instructed.

Example:

`/LOCK HERO`

means the Hero section must remain unchanged.

---

# 12. /UNLOCK [COMPONENT]

## Purpose

Remove protection from a previously locked component.

Example:

`/UNLOCK HERO`

Only after this command may the AI freely modify the specified component according to the user's instructions.

Unlocking one component does not unlock other components.

---

# 13. /STRICT

## Purpose

Enable strict modification mode.

When `/STRICT` is active:

- Modify only explicitly requested components.
- Modify only files required to complete the request.
- Do not refactor unrelated code.
- Do not redesign unrelated sections.
- Do not optimize unrelated components.
- Do not modify the design system.
- Do not make "helpful" visual changes.
- Preserve all existing behavior unless explicitly instructed otherwise.

The AI must prioritize precision over creativity.

---

# 14. /DESIGN-ONLY

## Purpose

Allow visual modifications while protecting application functionality.

The AI may modify:

- Layout
- Typography
- Spacing
- Colors
- Visual hierarchy
- Animation
- Responsive styling

The AI must NOT modify:

- Business logic
- API integrations
- Routing
- Data structures
- Application logic

unless explicitly requested.

---

# 15. /CODE-ONLY

## Purpose

Modify functionality while preserving the visual design.

When `/CODE-ONLY` is active, the existing visual design must remain unchanged.

The AI must NOT modify:

- Layout
- Typography
- Colors
- Spacing
- Images
- Animation
- Visual hierarchy

unless explicitly requested.

---

# 16. /WA

## Purpose

Activate the WhatsApp Floating Action Button protocol.

When `/WA` is activated:

1. Add a floating WhatsApp contact button.
2. Position it appropriately without obstructing important UI.
3. Use fixed positioning.
4. Ensure responsive behavior.
5. Ensure mobile safe-area compatibility.
6. Ensure the button is touch-friendly.
7. Use the existing design language.
8. Do not redesign the page.
9. Do not modify unrelated sections.
10. Do not change existing layout structure.

The WhatsApp button must be implemented as an isolated component whenever practical.

---

# 17. /REMOVE-WA

Remove the WhatsApp floating button and all directly associated implementation.

Do not modify unrelated components.

---

# 18. /SCOPE [COMPONENT OR FILE]

## Purpose

Restrict all modifications to a specific scope.

Example:

`/SCOPE HERO`

or:

`/SCOPE src/components/Hero.astro`

When active:

The AI may only modify the specified component or file.

Any required modification outside the scope must first be identified and explained.

The AI must not silently modify files outside the active scope.

---

# 19. /FREEZE-DESIGN

## Purpose

Freeze the entire visual design.

When active, the AI may modify functionality but must preserve the exact visual appearance.

The AI must NOT change:

- Layout
- Typography
- Spacing
- Colors
- Images
- Animations
- Component positioning

unless explicitly instructed.

---

# 20. /EXPERIMENT

## Purpose

Allow experimental changes without treating them as approved.

Experimental changes must be considered temporary.

The AI must:

1. Avoid modifying locked components.
2. Avoid modifying unrelated files.
3. Keep changes isolated whenever possible.
4. Clearly identify experimental files.
5. Preserve the ability to reverse the experiment.

Experimental work must not automatically replace an approved checkpoint.

---

# 21. APPROVAL SYSTEM

A modification becomes an approved reference only when the user explicitly approves it.

Examples:

- `APPROVED`
- `/CHECKPOINT homepage-v2`
- "This version is approved."
- "Keep this design."

Until explicit approval is given, major design modifications should be considered experimental.

---

# 22. DO NOT GUESS RULE

If the AI does not know which previous version the user means, the AI must NOT invent or recreate a design.

The AI must:

1. Inspect Git history.
2. Inspect recent changes.
3. Inspect checkpoints.
4. Inspect available project history.

Only if no previous state exists should the AI ask the user for clarification.

The AI must never silently guess.

---

# 23. CHANGE REPORT

After completing a modification, the AI must provide a concise report containing:

### Modified

List modified files.

### Preserved

List important components intentionally left unchanged.

### Protocol

State which protocol commands were active.

### Reversal

Explain how the change can be reversed.

The report should remain concise.

---

# 24. STOP CONDITION

After successfully completing the requested task, the AI must stop.

The AI must NOT continue with:

- Additional redesign
- Optional improvements
- Unrequested refactoring
- Additional feature development
- Visual experimentation

unless explicitly requested.

Completion means completion.

---

# 25. DEFAULT SAFE MODE

If no explicit protocol command is provided, the AI must operate in:

`SAFE MODE`

SAFE MODE rules:

- Preserve existing design.
- Preserve existing functionality.
- Make minimal modifications.
- Do not redesign unrelated components.
- Do not refactor unrelated code.
- Do not replace approved implementation.
- Prefer isolated changes.
- Treat ambiguity as a reason to inspect project history, not as permission to guess.

---

# 26. FINAL OPERATING INSTRUCTION

The AI agent must follow this principle:

"Preserve first. Modify second. Never redesign without permission. Never guess a previous state when an exact state can be restored."

The existing project is the source of truth.

User-approved checkpoints are protected states.

Protocol commands must be followed literally.

Precision is more important than creativity.
