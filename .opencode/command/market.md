---
description: Run an instant multi-platform promotional blast for Aquatic Sentinel or EasyAquatix products. Generates ready-to-review posts for all major social channels, forums, and email.
agent: marketing-manager
---

# /market Command — Instant Promotional Sweep

Run an instant promotional sweep across all marketing channels for $ARGUMENTS.

## Execution Steps

1. **Analyze the Target**: Identify which product or announcement the user wants to promote. If $ARGUMENTS is empty, assume the flagship product **Aquatic Sentinel**.

2. **Generate Staged Content**: Create ready-to-review posts for each platform:
   - **Reddit** (2 posts): One educational story-driven post for `r/Aquariums`, one technical feature breakdown for `r/ReefTank`.
   - **Twitter/X** (2 tweets + 1 thread): One punchy hook tweet, one parameter tip, one 5-tweet thread.
   - **Instagram** (1 carousel + 1 reel script): Educational carousel and 60-second Reel script.
   - **Facebook** (1 post): Community-friendly post with visual recommendation.
   - **Reef2Reef Forum** (1 thread): Technical changelog-style announcement or feature showcase.
   - **Email** (1 newsletter draft): Subject line, preview text, and full email body.

3. **Stage in Queue**: Save each generated post as a structured Markdown file in `marketing/queue/pending/` using the naming pattern `YYYY-MM-DD_[platform]_[slug].md`.

4. **Summary Report**: Present a clear summary table of all generated files with platform, hook/title, target audience, and file path.

## Output Format

For each platform, generate the following structure:

```markdown
---
id: [unique-id]
platform: [platform-name]
scheduled_date: [YYYY-MM-DD]
title_or_hook: [Headline or Hook]
target_audience: [beginner|intermediate|advanced_reefer|aquascaper|breeder]
product_link: [URL]
status: pending
---

## Content

[Full post copy formatted for the platform]

## Media / Visual Recommendation

[Description of ideal image, carousel, or video]

## Hashtags

[Platform-appropriate hashtags]
```

## Post-Generation Checklist

- [ ] All posts are help-first, not salesy
- [ ] Technical accuracy verified (parameter ranges, dosing math, platform specs)
- [ ] Each post includes a clear but soft CTA
- [ ] Target audience clearly identified
- [ ] Files saved to `marketing/queue/pending/`
- [ ] User informed they can run `npm run publish-queue` to review and approve
