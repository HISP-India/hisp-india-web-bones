

# Plan: Center Toast Notifications with Enhanced Styling

## What Changes
Two files need updating:

### 1. `src/components/ui/toast.tsx` — Reposition & restyle
- Change `ToastViewport` positioning from bottom-right to **center of screen** (fixed, centered horizontally and vertically)
- Update `toastVariants` default style: larger padding, rounded-lg, subtle shadow-2xl, centered text layout
- Add a success-style green accent for the default variant

### 2. `src/components/ui/toaster.tsx` — Enhanced layout
- Add a check icon (CheckCircle from lucide) for success toasts
- Center-align title and description text

This affects all 3 form submission points (Contact, ScheduleCallDialog, ResumeSubmitDialog) without changing their code.

