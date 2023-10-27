module Jekyll
    class ListProjects < Liquid::Tag
        def initialize(tag_name, params_string, tokens)
            super
            @attributes = parse_attributes(params_string)
        end
  
        def render(context)
            site = context.registers[:site]
            parent = @attributes['parent']
            projects = site.collections['projects'].docs

            if !parent.nil? && !parent.empty?
                # projects = projects.select { |project| project.data[parent] == parent }

                projects = projects.select do |project|
                    project.data.key?('parent') && project.data['parent'] == parent
                end
            end

            output = "<dl class=\"card related\">"
            output += "<dt>WVU Health Subsites</dt>"

            # output += "<div class=\"project__list\">"
                for project in projects
                    output += "<dd>"
                    output += "<a href=\"#{project.url}\">#{project.title} #{parent}</a>"
                    output += "</dd>"
                end
            # output += "</div>"

            output += "</dl>"

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
  
Liquid::Template.register_tag('list_projects', Jekyll::ListProjects)
