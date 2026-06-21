---
layout: post
title:  "Editorial Flow"
permalink: /editorial-flow/
thumbnail: thumb--1024x768.png
summary: "A flexible, flow-based editorial experience for building rich, consistent landing pages."
---

<dl class="meta">
    <div>
        <dt>Disciplines</dt>
        <dd>Design lead</dd>
        <dd>Visual design</dd>
        <dd>Design System</dd>
        <dd>Front-end development</dd>
    </div>
    <div>
        <dt>Tools</dt>
        <dd>Figma</dd>
        <dd>HTML/CSS</dd>
        <dd>Sass</dd>
        <dd>Umbraco</dd>
    </div>
    <div>
        <dt>Timeline</dt>
        <dd>December 2025</dd>
    </div>
</dl>

## The Problem

The editing experience of the previous <a href="https://health.wvu.edu">WVU Health website</a> in Umbraco 7 was locked down. Each unique page had a fixed layout with fixed fields, and editors couldn't reorder content or add a new section without relying on a developer. Editors were filling in blanks rather than making decisions. That sounds efficient, but the layout and content go stale quickly, and fields end up repurposed for things they were never meant to hold.

## Strategy & UX

Umbraco 15 made a more open editing experience possible and the goal was to take full advantage of it. The flow-based rich text editor supports a more editorial approach to content creation, built for marketing-focused editors, primarily school communicators. This is a meaningful shift from locking editors into rigid, reorderable templated blocks which frustrates anyone trying to write naturally.

The flow-based editing experience is built around a simpler idea: writing should stay writing. Editors work in a continuous rich text flow, inserting richer components like stats, profiles, or media directly within that flow rather than assembling pages from disconnected blocks. Structure exists, but it never interrupts the act of writing.

Full-width sections are reserved for moments that genuinely warrant a visual break, grouped content like stats or profiles that benefit from standing apart. Used sparingly and intentionally, sections punctuate the page rather than fragmenting it.

{% figure image="editorial-flow/strategy-ux.png" caption="Early mockups of the five primary landing pages, each assembled from the same flow-based system before build." breakout="true" %}

## Discipline Within the Flow

This approach meant rethinking how hero sections and supporting content behave. A hero should deliver instant clarity. One headline, one primary call to action, nothing competing for attention. Multiple buttons or an embedded video pull focus away from that immediate message and slow visitors down right when they should be moving forward into the page. 

Dedicated sidebars create the same kind of problem elsewhere on the page. They become a dumping ground for promos and links that don't fit anywhere else, collapsing awkwardly on smaller screens and breaking the reading flow. Both patterns were refined or avoided in favor of focused, contextual content that earns its place.

{% figure image="wvu-health-design-system/what-it-made-possible-1.png" caption="The Chancellor and Student Health homepages each lead with a single, focused message with no competing calls to action or cluttered hierarchy." breakout="true" %}

## An Evolving Toolkit

That same discipline shaped how the block library itself was built. Every block is available to every editor, free to assemble a page however the content calls for. The freedom can feel intimidating but it also means content decisions intentionally require thought, what to include, what order it belongs in, what deserves emphasis. That's content design, and it's a skill editors are still building.

It changes the relationship between the digital team and editors too. Rather than constantly building accommodations and making alterations, the role shifts toward reviewing pages, offering guidance, and having a real stake in how content comes together, not just technical support. The block library isn't a fixed catalog either. Each block is designed with room to grow before a new block is ever considered. A component built for one purpose often resurfaces elsewhere as supporting content without needing to be reinvented.

{% figure image="editorial-flow/an-evolving-toolkit--academics.png" type="" caption="The Academics page combines an illustrated campus map, a card slider pattern, and standard content sections, all built from one component library." breakout="true" %}

<!-- {% video_figure poster="editorial-flow/wvu-health-map--desktop.png" mp4="editorial-flow/wvu-health-map--desktop.mp4" caption="The interactive West Virginia map highlights the three Health Sciences campuses and four Nursing campuses." breakout="true" %} -->

{% figure image="editorial-flow/an-evolving-toolkit--changing-health.png" type="" caption="The Changing Health page reuses the same card slider pattern in a new context, alongside a card grid." breakout="true" %}

{% figure image="editorial-flow/an-evolving-toolkit--morgantown-campus.png" type="" caption="The Morgantown Campus page pairs the card slider pattern with a card callout, another configuration of the same underlying system." breakout="true" %}

{% figure image="editorial-flow/an-evolving-toolkit--chancellor.png" type="" caption="The Chancellor page uses pull-quotes, an anecdote callout, and a narrative structure, the same flexible blocks shaped around a different kind of story." breakout="true" %}
