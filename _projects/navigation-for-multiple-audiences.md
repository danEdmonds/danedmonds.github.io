---
layout: post
title:  Simplifying navigation for multiple audiences
permalink: /navigation-for-multiple-audiences/
thumbnail: thumb--menu-overlay--mobile.png
summary: A scalable, three-panel system organizing the full site structure into a single, animated navigation overlay.
disciplines:
  - Design lead
  - Visual design
  - Motion design
  - Design system
  - Front-end development
tools:
  - Figma
  - HTML/CSS
  - JavaScript
timeline: Fall 2025
order: 4
---

{% figure image="navigation-for-multiple-audiences/hero--menu-overlay.png" caption="" breakout="true" class="post-hero" %}

## Strategy & UX

Designing for multiple audiences above the fold is a losing proposition. Prioritize one group and you compromise the others. Try to serve everyone and you serve no one. The page becomes a cluttered index rather than an experience.

The decision was to stop trying. The [WVU Health homepage](https://health.wvu.edu/) makes a single, bold impression and asks nothing of the visitor except to feel something. Navigation becomes the place where audiences find their own path. A three-panel overlay packages the full sitemap into one cohesive space, moving through layers of hierarchy the way you'd move through a physical environment.

Each panel has room for more than just links. Supporting resources, social media, promotional callouts, and a news teaser travel with the user as they drill deeper, making the menu less of a utility and more of an entry point into the organization itself.

{% figure image="navigation-for-multiple-audiences/strategy-ux.png" caption="The three-panel menu structure was explored in Figma, with primary, secondary, and tertiary menu states mapped out before build." breakout="true" %}

## Everything in One Place

The navigation uses a three-panel menu overlay to organize the site's full structure into a single, coherent experience. Each panel represents a level of hierarchy with a mix of direct links and expandable sections. 

The first panel lists top-level links and sections, and selecting a section item slides the next panel in to reveal its links alongside a brief description. A third panel handles any deeper groupings the same way, with each transition animated to reinforce the relationship between levels.

The overlay scales from desktop to mobile while preserving the same panel behavior throughout. A supporting resources section is available in every panel, with social links anchored at the base of the menu.

{% video_figure poster="navigation-for-multiple-audiences/menu-overlay--desktop.png" mp4="navigation-for-multiple-audiences/menu-overlay--desktop.mp4" caption="The full menu interaction on desktop, from open through panel navigation to close." breakout="true" %}

{% figure image="navigation-for-multiple-audiences/menu-overlay--mobile.png" caption="The overlay scales to mobile while preserving the same three-panel behavior throughout." breakout="true" %}
