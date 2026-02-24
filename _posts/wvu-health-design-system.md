---
layout: post
title:  "Inside the WVU Health Design System"
permalink: /wvu-health-design-system/
summary: "Presenting the health education and patient care initiatives."
thumbnail: thumb-centered.jpg
order: 1
---

<!-- <div style="display: none;">
~~## Striving for consistency, not uniformity~~

~~The framework is intentionally consistent in structure, naming and functionality without being rigidly uniform. This reflects a mature approach, ensuring clear code standards without sacrificing design flexibility or creativity. While not every component needs to look identical, each follows the same core principles and utilizes established patterns and code.~~

~~## Managing Styles and Specificity~~

~~Following a modified ITCSS architecture with BEM methodology, the system leverages native Cascade Layers to explicitly manage specificity and prevent style conflicts. Sass is used exclusively to organize partials within these layers and handle logic-driven tasks, including managing nesting, defining variables for block-level classes, creating mixins, performing calculations, and handling iterations.~~

~~The system pairs a thoughtfully-structured HTML hierarchy with purpose-driven class selectors, avoiding HTML element selectors and utility classes to reduce specificity and keep styles consistent, reusable, and maintainable. Adding additional levels of HTML with distinct, non-competing classes is often encouraged, as it creates clearer structure and is preferable to stacking multiple responsibilities onto a single element.~~

~~While Sass nesting continues to be a necessary part of structuring CSS, thoughtful nesting is prioritized by restraining selector depth at two levels. This helps keep styles easy to read and maintain, and prevents unintentional over-specificity.~~

~~CSS variables drive all configurable properties and design tokens, including colors, fonts and decorative values. This allows for greater flexibility, improved support for runtime theming, and alignment with modern CSS standards. To avoid up-front clutter, components define their own default variable values locally rather than globally at the root.~~

~~Using simple grids, such as halves, thirds, and fourths, promote design consistency and improve code readability through a predictable, reusable structure.~~
</div> -->

The [WVU Health website](https://health.wvu.edu/) focuses on West Virginia University’s health education and patient care initiatives by highlighting the unique culture within the five health schools and the advanced technology and practices being used. 

<dl class="meta">
    <div>
        <dt>Disciplines</dt>
        <dd>Design lead</dd>
        <dd>Visual design</dd>
        <dd>Front-end development</dd>
        <dd>Motion design</dd>
    </div>
    <div>
        <dt>Tools</dt>
        <dd>HTML/CSS</dd>
        <dd>JavaScript</dd>
        <dd>GSAP</dd>
        <dd>Umbraco CMS</dd>
    </div>
    <div>
        <dt>Timeline</dt>
        <dd>March 2020</dd>
    </div>
</dl>

{% video_figure poster="wvu-health/wvu-health_homepage_poster.jpg" mp4="wvu-health/wvu-health_homepage_h.264.mp4" %}

We collaborated with the WVU Health Sciences Communications team to create a visual design that feels innovative and agile, and breaks through the traditional structure of a higher education website. Bold typography, in-the-moment photos, and concise sections ensure that every page layout feels as impactful as its content, with an emphasis on using animation to guide the audience throughout.

A collaborative approach to design, development, and content strategy ensured that WVU Health’s priorities are at the focus of every decision.

## The cover.

Referred to as the “cover”, editors choose from various layout options to focus on a single prominent item on the homepage supported by a large, engaging photo or video montage. The cover often serves as a playground to try out new and unique layouts and components.

{% video_figure poster="wvu-health/wvu-health_cover_diversity-week_poster.jpg" mp4="wvu-health/wvu-health_cover_diversity-week_h.264.mp4" caption="The University’s diversity, equity, and inclusion brand patterns are used to promote WVU Diversity Week on the cover." %}

{% video_figure poster="wvu-health/wvu-health_cover_welcome-week_poster.jpg" mp4="wvu-health/wvu-health_cover_welcome-week_h.264.mp4" caption="A spin-off of the University’s 90’s style Welcome Week brand shapes are used to promote WVU Welcome Week on the cover." %}

## Subpages.

I built a modular design system of adjustable components that fit together beautifully to efficiently create both captivating storytelling layouts and common templates.

This design system is continuously growing as it’s used as the foundation for building microsites under the WVU Health umbrella, creating an ecosystem of WVU Health properties that share one sustainable and growing collection of modular and extendable components. Building these microsites often spurs new unique components along with expanding upon and evolving existing components to create new variations.

{% figure image="wvu-health/wvu-health_research.jpg" caption="" %}

{% codepen_embed hash="oNJNgNQ" user="danedmonds" caption="" %}

{% figure image="wvu-health/wvu-health_education.jpg" caption="" %}

{% figure image="wvu-health/wvu-health_grants.jpg" caption="I built a simple, sortable list of research grants awarded to the University, using a colorful set of custom icons and illustrations to present information throughout." %}

<!-- {% codepen_embed hash="NWejppW" user="danedmonds" caption="" %} -->
