---
name: Accessibility issue
about: Report an accessibility issue to help us improve
title: "A11Y: <short_description>"
labels: bug, needs triage, a11y
assignees: ""
type: bug
---

## Summary

Brief overview of the accessibility issues found and total count.
(Optional: mention if any are related to hover/focus states.)

## Issues Found

<!--
Example:
- Color contrast (3×, Serious)
  **Rule:** Elements must meet minimum color contrast ratio thresholds.
  **Notes:** Includes link contrast on hover.
-->

- **[Area / Pattern] ([Count]x, [Severity])**
  **Rule:** [Accessibility rule or guideline violated.]
  **Notes:** [Concrete example(s) of how it appears in the UI.]

- **[Area / Pattern] ([Count]x, [Severity])**
  **Rule:** [Accessibility rule or guideline violated.]
  **Notes:** [Concrete example(s).]

- etc.

### Testing Environment (Optional)

- **Tool Used:** [e.g., AXE DevTools, Lighthouse, WAVE]
- **Assistive Technology:** [e.g., NVDA, VoiceOver] (if used)
- **Browser:** [e.g., Chrome 128, Firefox 130]
- **OS:** [e.g., macOS 15, Windows 11] (optional)

## Impact

Who is affected (e.g., screen reader users, low-vision users [400% zoom], keyboard-only users) and what the impact is.

## Steps to Reproduce

1. Go to …
2. Run Axe DevTools or try to …
3. See `[what_fails_accessibility]`

## Expected Behavior

Plain-language description of what should happen for the experience to be accessible
(e.g., “Links and buttons meet contrast requirements and have clear focus states.”)

## Additional Context

Links to screenshots, video captures, or reports (e.g., Lighthouse, AXE) and any notes for implementation, edge cases, or related tickets.
