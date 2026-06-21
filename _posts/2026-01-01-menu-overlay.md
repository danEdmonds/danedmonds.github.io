---
layout: post
title:  "Menu Overlay"
permalink: /menu-overlay/
thumbnail: menu-overlay--thumb.png
summary: "A scalable, three-panel system organizing the full site structure into a single, animated navigation overlay."
---

<dl class="meta">
    <div>
        <dt>Disciplines</dt>
        <dd>Design lead</dd>
        <dd>Visual design</dd>
        <dd>Motion design</dd>
        <dd>Design System</dd>
        <dd>Front-end development</dd>
    </div>
    <div>
        <dt>Tools</dt>
        <dd>Figma</dd>
        <dd>HTML/CSS</dd>
        <dd>Sass</dd>
        <dd>JavaScript</dd>
    </div>
    <div>
        <dt>Timeline</dt>
        <dd>Fall 2025</dd>
    </div>
</dl>

## Strategy & UX

Designing for multiple audiences above the fold is a losing proposition. Prioritize one group and you compromise the others. Try to serve everyone and you serve no one. The page becomes a cluttered index rather than an experience.

The decision was to stop trying. The <a href="https://health.wvu.edu/">WVU Health homepage</a> makes a single, bold impression and asks nothing of the visitor except to feel something. Navigation becomes the place where audiences find their own path. A three-panel overlay packages the full sitemap into one cohesive space, moving through layers of hierarchy the way you'd move through a physical environment.

Each panel has room for more than just links. Supporting resources, social media, promotional callouts, and a news teaser travel with the user as they drill deeper, making the menu less of a utility and more of an entry point into the organization itself.

{% figure image="menu-overlay/strategy-ux.png" caption="The three-panel menu structure was explored in Figma, with primary, secondary, and tertiary menu states mapped out before build." breakout="true" %}

## Everything in One Place

The navigation uses a three-panel menu overlay to organize the site's full structure into a single, coherent experience. Each panel represents a level of hierarchy with a mix of direct links and expandable sections. 

The first panel lists top-level links and sections, and selecting a section item slides the next panel in to reveal its links alongside a brief description. A third panel handles any deeper groupings the same way, with each transition animated to reinforce the relationship between levels.

The overlay scales from desktop to mobile while preserving the same panel behavior throughout. A supporting resources section is available in every panel, with social links anchored at the base of the menu.

{% video_figure poster="menu-overlay/menu-overlay--desktop.png" mp4="menu-overlay/menu-overlay--desktop.mp4" caption="The full menu interaction on desktop, from open through panel navigation to close." breakout="true" %}

{% figure image="menu-overlay/menu-overlay--mobile.png" caption="The overlay scales to mobile while preserving the same three-panel behavior throughout." breakout="true" %}
