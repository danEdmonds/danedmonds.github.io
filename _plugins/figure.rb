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
            breakout = @attributes['breakout']
            type = @attributes['type']

            classes = ['grid', 'figure']
            classes << 'figure--breakout' if breakout == 'true'
            classes << 'figure--mobile' if type == 'mobile'

            output = "<figure class=\"#{classes.join(' ')}\">"
            output += "<img src=\"#{baseurl}/assets/images/#{image}\" alt=\"\" width=\"1600\" height=\"1200\" loading=\"lazy\">"

            unless caption.to_s.empty?
                converter = context.registers[:site].find_converter_instance(Jekyll::Converters::Markdown)
                caption_html = converter.convert(caption)
                caption_html = caption_html.sub(/\A<p>/, '').sub(/<\/p>\s*\z/, '')

                output += "<figcaption>#{caption_html}</figcaption>"
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
