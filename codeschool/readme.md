bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)
bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)bloggers_information = [[["James Spader"],["214.555.1357"],["123 N South St."],["Chicago"],["il"],["60645"],["@samspade"]],
                        [["Jenny Forrest"],["Schamberg"],["il"],["312-555-2244"],["@imaboat"]],
                        [["Jimmy Stuart"],["@getyerwings"],["313 555 9865"],["1128 Alameda Ave"],["Glendale"],["CA"],["92606"]],
                        [["Mountain Joe"],["3035550021"],["@campfire"]],
                        [["Mr. Henderson"],["312-555-9224"],["Chicago"],["il"],["60647"],["@hairy"]],
                        [["Nerf Herder"],["123 N South St."],["Chicago"],["il"],["60645"],["@blueharvest"],["310.555.2234"]]]
def retrieve_info(nested_array)
	return_hash = {}
	nested_array.each do |person|
		return_hash.store(person[0].join(""), {})

		person.each do |mystery_value|
			if mystery_value.join("") =~ /\d{3}/ && mystery_value.join("") !~ /\A\d{5}\z/ && mystery_value.join("") !~ /[a-z]/
				# =~ /\d{3}\W\d{3}\W\d{4}/
				# Using OR:
				# =~ /\d{3}(\W|)\d{3}\W\d{4}/
				# store the mystery value in nested hash under phone
				return_hash[person[0].join("")][:phone] = mystery_value.join("")
			elsif mystery_value.join("") =~ /@{1}/
				# /^@/
				# store the mystery value in the nested hash under twitter
				return_hash[person[0].join("")][:twitter] = mystery_value.join("")
			end
		end
	end
	return_hash
end
p retrieve_info(bloggers_information)
