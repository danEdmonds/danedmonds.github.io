module Jekyll
    class Figure < Liquid::Tag
        def initialize(tag_name, params_string, tokens)
            super
            @attributes = parse_attributes(params_string)
        end
  
        def render(context)
            baseurl = context['site']['baseurl']
            image = @attributes['image']
            caption = @attributes['caption']

            output = "<figure class=\"figure\">"
            output += "<img src=\"#{baseurl}/assets/images/#{image}\" alt=\"\" width=\"1600\" height=\"1200\" loading=\"lazy\">"ç

            if !caption.nil? && !caption.empty?
                output += "<figcaption>#{caption}</figcaption>"
            end

            output += "</figure>"

            return output;
        end

        private

        def parse_attributes(markup)
            attributes = {}

            markup.scan(/(\w+)\s*=\s*["']([^"']+)["']/) do |key, value|
                attributes[key] = value
            end

            attributes
        end
    end
end
  
Liquid::Template.register_tag('figure', Jekyll::Figure)
