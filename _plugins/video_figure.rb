module Jekyll
    class VideoFigure < Liquid::Tag
        def initialize(tag_name, params_string, tokens)
            super
            @attributes = parse_attributes(params_string)
        end
  
        def render(context)
            baseurl = context['site']['baseurl']
            poster = @attributes['poster']
            # webm = @attributes['webm']
            mp4 = @attributes['mp4']
            caption = @attributes['caption']

            output = "<figure class=\"figure\">"
            output += "<video poster=\"#{baseurl}/assets/images/#{poster}\" muted autoplay loop style=\"width: 100%; height: auto;\">"
            output += "<source src=\"#{baseurl}/assets/images/#{mp4}\" type=\"video/mp4\" />"
            output += "</video>"

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
  
Liquid::Template.register_tag('video_figure', Jekyll::VideoFigure)
