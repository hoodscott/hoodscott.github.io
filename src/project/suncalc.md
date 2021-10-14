---
title: suncalc
description: sun calculator
date: 2021-10-14
layout: project.njk
github: https://github.com/hoodscott/suncalc
site: demo/
image: /img/suncalc.png
image_text: Example of sunrise/sunset graph
---

::: section

### Goals

- Find out the average sunrise times for a year
- Get back into coding

:::

::: section

### Description

First version used the API for [https://sunrise-sunset.org/]() which was very accurate but I was hitting rate limits pretty quickly.  I then adapted to use the equations from [Wikipedia](https://en.wikipedia.org/wiki/Sunrise_equation) which seemed a little too approximate for my location.  Final version uses [mourner's suncalc](https://github.com/mourner/suncalc) which after a little tweaking seemed accurate enough. 

Uses [Chart.js](https://www.chartjs.org/) to draw the graphs which turned out to be nice and simple.  Best fit lines do not come by default and require another package so I just made do with adding some extra dashed lines manually.

Since the first version of this used `fetch` to access the API, the code was pretty heavy on the JavaScript Promises and functional programming.  Once the API code was removed the code was slowly stripped back to the more common imperative way of doing things.  I'd like to find another excuse to use Promises so I can wrap my head around them a bit more.

:::
