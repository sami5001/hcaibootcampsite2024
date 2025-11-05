# Contributing to HcAI Bootcamp Website

Thank you for your interest in contributing to the HcAI Bootcamp website! This guide will help you add or modify content for speakers, trainers, lectures, sponsors, and agenda items.

## Content Management

All content is stored as Markdown files with YAML frontmatter in the `/app/content/` directory. The frontmatter contains structured metadata, and the body contains the main content in Markdown format.

## Adding Content

### Speakers

Speaker profiles are stored in `/app/content/speakers/`. Create a new file named `firstname-lastname.md`.

**File format:**

```markdown
---
id: firstname-lastname
name: Full Name with Title
title: Job Title
organization: Organization Name
image: https://example.com/image.jpg
tags:
  - Human-centred AI
  - Design Innovation
  - Digital Health
featured: true
type: keynote
order: 1
website: https://example.com
---

Biography paragraph here. You can write multiple paragraphs about the speaker's background, achievements, and expertise.

Add additional paragraphs as needed.
```

**Field descriptions:**
- `id` (required): Unique identifier, should match filename without .md
- `name` (required): Speaker's full name with title (e.g., "Professor Ben Shneiderman")
- `title` (required): Professional title or position
- `organization` (required): Affiliated organization or institution
- `image` (required): URL to speaker's photo (can be external or local path)
- `tags` (optional): Array of relevant topic tags
- `featured` (optional): Set to `true` to highlight this speaker
- `type` (optional): Speaker category (e.g., "keynote", "speaker")
- `order` (optional): Display order (lower numbers appear first)
- `website` (optional): Personal or professional website URL

**Available tags:**
- Human-centred AI
- Medical Entrepreneurship
- Law & Ethics
- Public Health
- Design Innovation
- Digital Health
- Artificial Intelligence
- Primary Care

### Trainers

Trainer profiles are stored in `/app/content/trainers/`. Format is identical to speakers.

```markdown
---
id: firstname-lastname
name: Full Name
title: Job Title
organization: Organization Name
image: /images/trainer-photo.jpg
tags:
  - Design Innovation
  - Human-centred AI
order: 1
---

Trainer biography and background information here.
```

### Lectures

Lecture descriptions are stored in `/app/content/lectures/`. Create a file named `presenter-lastname.md` or a descriptive slug.

**File format:**

```markdown
---
title: "Lecture Title"
presenterName: "Full Name"
presenterTitle: "Job Title"
presenterOrg: "Organization Name"
imageUrl: "/images/lectures/image-name.png"
youtubeVideoUrl: "https://youtube.com/watch?v=..."
order: 1
tags:
  - Digital Health
  - Public Health
  - Design Innovation
---

Lecture description paragraph. Explain what the lecture covers, key topics, and learning objectives.

Additional details can be added in subsequent paragraphs.
```

**Field descriptions:**
- `title` (required): Lecture title
- `presenterName` (required): Full name of presenter
- `presenterTitle` (required): Professional title
- `presenterOrg` (required): Organization affiliation
- `imageUrl` (optional): Path to lecture thumbnail image
- `youtubeVideoUrl` (optional): URL to recorded lecture video
- `order` (optional): Display order
- `tags` (optional): Array of relevant topic tags

### Sponsors

Sponsor profiles are stored in `/app/content/sponsors/`. Create a file with the sponsor's name as slug.

```markdown
---
id: sponsor-name
name: Sponsor Organization Name
logo: /images/sponsor-logo.png
website: https://sponsor.com
order: 1
featured: true
---

Brief description of the sponsor organization and their role in supporting the bootcamp.
```

### Agenda Items

Agenda entries are stored in `/app/content/agenda/`. These define the event schedule.

```markdown
---
day: 1
date: "2024-06-10"
title: "Day 1: Introduction to Human-Centered AI"
order: 1
---

## 09:00 - Welcome & Registration

Introduction to the bootcamp program.

## 10:00 - Keynote Speech

Opening keynote by [Speaker Name].

## 12:00 - Lunch Break

Networking opportunity.
```

## Image Guidelines

### Local Images

Place images in the `/public/` directory:
- Speaker/trainer photos: `/public/images/speakers/` or `/public/images/trainers/`
- Lecture thumbnails: `/public/images/lectures/`
- Sponsor logos: `/public/images/sponsors/`

Reference local images with paths starting with `/`:

```markdown
image: /images/speakers/john-doe.jpg
```

### Remote Images

You can link to external images hosted on approved domains:
- nihr.ac.uk
- unsplash.com
- umd.edu
- github.com
- Any HTTPS URL

```markdown
image: https://example.com/path/to/image.jpg
```

## Markdown Formatting

The body content supports standard Markdown:

- **Bold text:** `**bold**`
- *Italic text:* `*italic*`
- [Links](url): `[text](url)`
- Line breaks: Use two spaces at end of line or a blank line
- Lists: Use `-` or `*` for bullets, `1.` for numbered
- Headings: `##`, `###`, etc.

## Content Display Order

Items are sorted by:
1. `order` field (ascending)
2. `name` or `title` field (alphabetical)

Use the `order` field to control display sequence.

## Testing Your Changes

After adding or modifying content:

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the relevant page (e.g., `/speakers`, `/lectures`)

3. Verify:
   - Content displays correctly
   - Images load properly
   - Links work
   - Formatting is correct

4. Build the production version to check for errors:
   ```bash
   npm run build
   ```

## Submitting Changes

1. Create a new branch:
   ```bash
   git checkout -b add-speaker-name
   ```

2. Add your changes:
   ```bash
   git add app/content/
   ```

3. Commit with a descriptive message:
   ```bash
   git commit -m "Add speaker: John Doe"
   ```

4. Push your branch:
   ```bash
   git push origin add-speaker-name
   ```

5. Create a pull request for review

## Common Issues

### Image Not Loading

- Verify the file exists at the specified path
- Check file extension matches (case-sensitive)
- Ensure remote URLs are from approved domains

### Content Not Appearing

- Check YAML frontmatter formatting (proper indentation, no tabs)
- Ensure required fields are present
- Verify filename follows naming convention
- Run `npm run build` to check for errors

### Formatting Issues

- Use blank lines between paragraphs
- Don't mix tabs and spaces in YAML
- Quote strings containing special characters (`:`, `#`, etc.)

## Questions?

If you need help or have questions about contributing, please open an issue or contact the maintainers.

## Code of Conduct

Please be respectful and professional in all contributions. This project represents the University of Oxford and should maintain high standards of quality and accuracy.
