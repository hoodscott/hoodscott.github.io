---
title: cairds
description: card 'game' builder and player
date: 2017-11-18
layout: project.njk
github: https://github.com/hoodscott/cairds
site: 
image: /img/cairds.png
image_text: Two people playing in the same four player game of poker
---

::: section

### Goals

- Learn websockets
- Learn to use draggable HTML

:::

::: section

### Description

Cairds is a website where you can set up a card game configuration then invite people to play cards with you.  It uses javascript to keep a representation of the cards which is then displayed to the user with some basic HTML and CSS.  The shared card representation can be changed by users by sending messages to the central server with websockets.  Any updates to this object are then sent back to the clients with the same websockets.

There is no 'game logic' built in to the website.  The idea is that the website is emulating a pack of cards so it is up to the players to keep score and implement the rules of the game.  The only rules that can be defined are the number of regions on the table, the maximum size of the players' hands or table regions, and if the hands or regions are facedown, private, or showing.

Players choose their colour with a simple dropdown which allows them to see cards in their hand if they were marked as private in the configuration setup.  The players can take actions with the cards such as shuffles and flipping by dragging a card or stack of cards to special areas on the table.

:::

::: section

### Conculsions

Designing the frontend for desktops first made the conversion to smaller screens harder.  The site still doesn't look great on mobiles which really should have been the main way of playing.  For future projects I'll need to consider what the main 'mode' will be and start the designs there.  I think that even designing mobile first may be a good idea as it seems like it would be easier to blow up a design than squish it.

The draggable attribute HTML was a little tricky to work with.  I think a draggable library would have been a better fit in here to cover edge cases and would also mean the website may work on older browsers that don't have the draggable attribute and API yet.

Sharing the link should have been made easier, maybe instead of using the url and relying on the browser I could have had an input in the website somewhere.  There also needs to be a tutorial for this (and the rest of the website) somewhere as it is not clear that you can share the URL to invite people to your game.

:::
