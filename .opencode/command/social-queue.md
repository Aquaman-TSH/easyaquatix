---
description: Generate a full daily social media content queue for 7 to 30 days, filling the review queue with ready-to-post content across all channels.
agent: marketing-manager
---

# /social-queue Command — Fill the Content Queue

Generate a complete daily social media content queue for $ARGUMENTS days (default: 7).

## Execution Steps

1. **Parse Duration**: If $ARGUMENTS contains a number, use it. Otherwise default to 7 days. Max 30 days.

2. **Create Daily Content Packs**: For each day in the queue, generate:
   - 1 Reddit post (rotating between `r/Aquariums`, `r/ReefTank`, `r/Aquascape`)
   - 1 Twitter/X tweet or thread
   - 1 Instagram carousel or reel script
   - 1 Facebook post
   - (Every 3rd day) 1 Reef2Reef forum thread
   - (Weekly) 1 Email newsletter draft

3. **Apply Content Calendar Mix**:
   - Monday: Educational tip (parameter focus)
   - Tuesday: Community engagement (poll, question, user spotlight)
   - Wednesday: Product feature spotlight
   - Thursday: Advanced technical deep-dive
   - Friday: User-generated content / tank showcase
   - Saturday: Quick troubleshooting tip
   - Sunday: Weekend maintenance reminder / newsletter teaser

4. **Stage Everything**: Save each piece of content to `marketing/queue/pending/` with proper frontmatter metadata.

5. **Diversity Rules**:
   - No repeated hooks or topics across the queue
   - Rotate between beginner, intermediate, and advanced content
   - Include 2-3 promotional posts per week (soft-sell only)
   - Balance educational (60%), community (20%), and promotional (20%)

## Output Format

Each file follows this structure:

```markdown
---
id: [unique-id]
platform: [reddit|twitter|instagram|facebook|reef2reef|email]
scheduled_date: [YYYY-MM-DD]
content_day: [Monday|Tuesday|...]
title_or_hook: [Headline]
target_audience: [beginner|intermediate|advanced_reefer|aquascaper|breeder]
content_type: [educational|community|promotional|troubleshooting]
product_link: [URL or null]
status: pending
---

## Content

[Full post copy]

## Media Recommendation

[Visual description]

## Hashtags

[Platform-appropriate tags]

## Engagement Notes

[Expected response type, follow-up comments to post]
```

## Summary Report

After generation, present:
- Total posts generated
- Breakdown by platform
- Date range covered
- File location: `marketing/queue/pending/`
- Reminder: Run `npm run publish-queue` to review and approve
