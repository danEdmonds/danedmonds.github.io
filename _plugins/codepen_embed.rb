module Jekyll
    class CodepenEmbed < Liquid::Tag
        # def initialize(tag_name, args, tokens)
        def initialize(tag_name, params_string, tokens)
            super
            # @args = args.split(' ')
            @attributes = parse_attributes(params_string)
        end
  
        def render(context)
            # hash = @args[0]
            hash = @attributes['hash']
            # user = @args[1]
            user = @attributes['user']
            caption = @attributes['caption']

            # output = "<div class=\"project-entry__codepen\">"
            output = "<figure class=\"project-entry__figure\">"
            # output += "<p class=\"codepen\" data-height=\"743\" data-default-tab=\"result\" data-slug-hash=\"#{hash}\" data-user=\"#{user}\" style=\"height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;\"><span>See the Pen <a href=\"https://codepen.io/#{user}/pen/#{hash}\"> WVU R1 Logo SVG Animation</a> by Dan Edmonds (<a href=\"https://codepen.io/#{user}\">@#{user}</a>) on <a href=\"https://codepen.io\">CodePen</a>.</span></p>"
            output += "<p class=\"codepen\" data-height=\"743\" data-default-tab=\"result\" data-slug-hash=\"#{hash}\" data-user=\"#{user}\"><span>See the Pen <a href=\"https://codepen.io/#{user}/pen/#{hash}\"> WVU R1 Logo SVG Animation</a> by Dan Edmonds (<a href=\"https://codepen.io/#{user}\">@#{user}</a>) on <a href=\"https://codepen.io\">CodePen</a>.</span></p>"
            output += "<script async src=\"https://cpwebassets.codepen.io/assets/embed/ei.js\"></script>"

            if !caption.nil? && !caption.empty?
                output += "<figcaption>#{caption}</figcaption>"
            end

            # output += "</div>"
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
