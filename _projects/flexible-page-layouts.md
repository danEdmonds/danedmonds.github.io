---
layout: post
title:  Designing flexible page layouts
permalink: /flexible-page-layouts/
thumbnail: thumb--wvu-health--homepage.png
summary: A flexible editorial experience that makes it easier for communicators to create rich, consistent landing pages.
disciplines:
  - Design lead
  - Visual design
  - Design system
  - Front-end development
tools:
  - Figma
  - HTML/CSS
  - Umbraco
timeline: December 2025
order: 6
---

{% figure image="flexible-page-layouts/hero--wvu-health--collage.png" caption="" breakout="true" %}

## The Problem

The editing experience of the previous [WVU Health website](https://health.wvu.edu) in Umbraco 7 was locked down. Each unique page had a fixed layout with fixed fields, and editors couldn't reorder content or add a new section without relying on a developer. Editors were filling in blanks rather than making decisions. That sounds efficient, but the layout and content go stale quickly, and fields end up repurposed for things they were never meant to hold.

## Strategy & UX

Umbraco 15 made a more open editing experience possible, and the goal was to take full advantage of it. The flow-based rich text editor supports a more editorial approach to content creation, built for marketing-focused editors, primarily school communicators. This is a meaningful shift from locking editors into rigid, reorderable templated blocks that frustrate anyone trying to write naturally.

<!-- Before defining the editing experience, the layouts themselves were explored to understand how different content types could flow naturally while maintaining a consistent underlying structure. -->

The flow-based editing experience is built around a simpler idea: writing should stay writing. Editors work in a continuous rich text flow, inserting richer components like stats, profiles, or media directly within that flow rather than assembling pages from disconnected blocks. Structure exists, but it never interrupts the act of writing.

Full-width sections are reserved for moments that genuinely warrant a visual break, grouping content like stats or profiles that benefits from standing apart. Used sparingly and intentionally, these sections punctuate the page rather than fragmenting it.

{% figure image="flexible-page-layouts/strategy-ux.png" caption="Early mockups of the five WVU Health primary landing pages, each assembled from the same flow-based system before build." breakout="true" %}

## Discipline Within the Flow

This approach meant rethinking how hero sections and supporting content behave. A hero should deliver instant clarity. One headline, one primary call to action, nothing competing for attention. Multiple buttons or an embedded video pull focus away from that immediate message and slow visitors down right when they should be moving forward into the page. 

Dedicated sidebars create the same kind of problem elsewhere on the page. They become a dumping ground for promos and links that don't fit anywhere else, collapsing awkwardly on smaller screens and breaking the reading flow. Both patterns were refined or avoided in favor of focused, contextual content that earns its place.

{% figure image="flexible-page-layouts/discipline-within-the-flow.png" caption="The School of Nursing Education page and Admission and Aid landing page share the same editorial system while adapting their layouts to different communication goals." breakout="true" %}

## An Evolving Toolkit

That same discipline shaped how the block library itself was built. Every block is available to every editor, free to assemble a page however the content calls for. The freedom can feel intimidating but it also means content decisions intentionally require thought, what to include, what order it belongs in, what deserves emphasis. That's content design, and it's a skill editors are still building.

It changes the relationship between the digital team and editors too. Rather than constantly building accommodations and making alterations, the role shifts toward reviewing pages, offering guidance, and having a real stake in how content comes together, not just technical support. The block library isn't a fixed catalog either. Each block is designed with room to grow before a new block is ever considered. A component built for one purpose often resurfaces elsewhere as supporting content without needing to be reinvented.

<div class="gallery">
    {% figure image="flexible-page-layouts/an-evolving-toolkit--testimonial.png" type="" caption="" breakout="true" %}

    {% figure image="flexible-page-layouts/an-evolving-toolkit--stats.png" type="" caption="" breakout="true" %}

    {% figure image="flexible-page-layouts/an-evolving-toolkit--cta-banner.png" type="" caption="" breakout="true" %}

    {% figure image="flexible-page-layouts/an-evolving-toolkit--news.png" type="" caption="" breakout="true" %}
</div>

{% figure image="flexible-page-layouts/an-evolving-toolkit--wvu-nursing--homepage.png" type="" caption="" breakout="true" %}

<!-- <div class="gallery">
    {% figure image="flexible-page-layouts/an-evolving-toolkit--testimonial.png" type="" caption="" breakout="true" %}

    {% figure image="flexible-page-layouts/an-evolving-toolkit--stats.png" type="" caption="" breakout="true" %}
</div> -->

<!-- {% figure image="flexible-page-layouts/an-evolving-toolkit--wvu-nursing--student-life.png" type="" caption="" breakout="true" %} -->

<!-- {% figure image="flexible-page-layouts/an-evolving-toolkit--wvu-health--morgantown-campus.png" type="" caption="" breakout="true" %} -->
