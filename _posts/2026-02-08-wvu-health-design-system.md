---
layout: post
title:  "WVU Health Design System"
permalink: /wvu-health-design-system/
thumbnail: thumb--1200x1600.png, thumb--1600x1200.png
summary: "A scalable, principle-driven framework promoting consistency, accessibility, and sustainability."
---

<!-- {% figure image="wvu-health-design-system/wvu-health-design-system.jpg" caption="" %} -->

The <a href="https://health.wvu.edu/">WVU Health</a> design system is built on strong core design principles and a scalable foundation that supports consistency, accessibility and long-term growth.

By unifying layouts, styles and behaviors across websites, the system reduces redundancy while ensuring alignment with <a href="https://scm.wvu.edu/brand/">WVU brand patterns</a>, and adherence to accessibility standards.

<dl class="meta">
    <div>
        <dt>Disciplines</dt>
        <dd>Design lead</dd>
        <dd>Visual design</dd>
        <dd>Front-end development</dd>
    </div>
    <div>
        <dt>Tools</dt>
        <dd>HTML/CSS</dd>
        <dd>Sass</dd>
    </div>
    <div>
        <dt>Timeline</dt>
        <dd>Fall 2025</dd>
    </div>
</dl>

The framework prioritizes **consistency without rigid uniformity**, balancing clear standards with design flexibility. Components share core principles and patterns rather than identical appearances.

The system uses a modified ITCSS architecture with BEM methodology, leveraging native cascade layers to manage specificity and prevent conflicts.

- **Sass handles logic-driven tasks**, including managing nesting, defining variables for block-level classes, creating mixins, performing calculations, and handling iterations.
- **Thoughtfully-structured HTML hierarchy is paired with purpose-driven class selectors**, avoiding element selectors and utility classes to keep styles consistent, reusable, and maintainable.
- **Extra levels of HTML with distinct, non-competing classes** are encouraged to clarify structure rather than stacking multiple responsibilities onto a single element.
- **In Sass, nesting depth is limited to two levels** to keep styles readable, maintainable, and prevent over-specificity.
- **CSS variables drive all configurable properties and design tokens**, including colors, fonts and decorative values. Components define their own default variable values locally rather than globally at the root.
- **Simple grids**, such as halves, thirds, and fourths, promote predictable, reusable structures.
