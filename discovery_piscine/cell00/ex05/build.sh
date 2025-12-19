# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    build.sh                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jeabarro <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2025/12/17 10:11:30 by jeabarro          #+#    #+#              #
#    Updated: 2025/12/17 10:22:21 by jeabarro         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

if [ $# -eq 0 ]; then
	echo "No arguments"
	exit 0
fi

for i in "$@" #i = var com cada arg --- $@ = all args one by one
do
	mkdir "ex$i" #add ex before each arg
	chmod 755 "ex$i" #change permissions
done
