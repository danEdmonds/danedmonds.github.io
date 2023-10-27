module Jekyll
    class Section < Liquid::Block
        def render(context)
            markup = super
            "<div class=\"project-entry__section\">#{markup}</div>"
        end
    end
end
  
Liquid::Template.register_tag('section', Jekyll::Section)
