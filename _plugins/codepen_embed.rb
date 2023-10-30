module Jekyll
    class CodepenEmbed < Liquid::Tag
        # def initialize(tag_name, args, tokens)
        def initialize(tag_name, params_string, tokens)
            super
            # @args = args.split(' ')
            @attributes = parse_attributes(params_string)
        end
  
        def render(context)
            hash = @attributes['hash']
            user = @attributes['user']
            caption = @attributes['caption']

            output = "<figure class=\"figure\">"
            output += "<p class=\"codepen\" data-height=\"743\" data-default-tab=\"result\" data-slug-hash=\"#{hash}\" data-user=\"#{user}\"><span><a href=\"https://codepen.io/#{user}/pen/#{hash}\">See the Pen on CodePen</a>.</span></p>"
            output += "<script async src=\"https://cpwebassets.codepen.io/assets/embed/ei.js\"></script>"

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
  
Liquid::Template.register_tag('codepen_embed', Jekyll::CodepenEmbed)
