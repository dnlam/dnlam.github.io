---
layout: page
title: Projects
permalink: /projects/
---
Under construction, I will update projects soon ...
<div class="row">
    <div class="paper-img">
      <img src="/fastblog/images/pol_iter.PNG" class="thumbnail" width="200" height="200" />
    </div>
    <div class="paper-text">
      <a href="https://www.owcconference.com/paper/reaching-7-7-gb-s-in-owc-with-dco-ofdm-on-a-single-blue-10-%C2%B5m-gan-micro-led/"><b>Reaching 7.7 Gb/s in OWC with DCO-OFDM on a Single Blue 10-um GaN Micro-LED
</b></a> <span style="font-size:16px;"><i></i></span><br /> 
      <span style="font-size:15px;"><i>Luc Maret, <b> Lam Ngoc Dinh </b>, Alexandre Lagrange, Patrick Demars, Ludovic Dupré and Olivier Lartigue
</i></span> <br /> 
      <a class="label label-info"> Abstract <span class="abstract">This presentation describes recent activities on ultra-high speed Optical Wireless Communications (OWC) using Gallium-Nitride micro-LEDs 
      designed and fabricated at CEA-Leti. Micro-LEDs are one of the most promising OWC optical sources due to their high illumination efficiency 
      and their large modulation bandwidths. Preliminary work focused on the implementation of a 10-µm single blue micro-LED on sapphire wafer within 
      an experimental OWC setup, mixing software generation of direct-current optical orthogonal frequency division multiplexing (DCO-OFDM) patterns 
      and hardware optical components for light collection, high speed photo-detection and digital acquisitions. Intensity modulation conveys 
      DCO-OFDM waveform and direct detection is used at reception. A high current density of 25.5 kA/cm² provided a modulation bandwidth of 1.8 GHz. 
      Associated to bit and power loading with up to a 256-QAM subcarrier modulation, it enabled a new data rate of 7.7 Gb/s, compared to the previous 
      record of 5.37 Gb/s reached with a blue 21-µm microLED in 2016. Towards a better understanding of the micro-LED design impact on OWC performance, 
      next investigations will study the electrical modelling of such micro-LEDs in the high frequency regime. Future works will cover the use of large 
      arrays of more than 10 thousands micro-LEDs. The first objective is to open the way to new digital-to-optical modulations by independently driving 
      each pixel, to remove digital-to-analogue converter and target highly integrated system-on-chips for ultra-high speed OWC transmitters. Secondly, 
      higher emitted optical power is expected to open such technology to indoor multiple access applications where light collection and emitter-receiver 
      alignment may not be possible anymore.
</span> </a> &nbsp; 
      
      
        <a href="https://www.photonics.com/Articles/CEA-Leti_Researchers_Set_Throughput_Record_for/a65854" class="label label-danger">Blog</a> 
      
      
        <a href="https://speechbot.github.io/pgslm/" class="label label-warning">Demo</a>
  </div>

{% for year in site.data.papers %}
### {{year[0]}}
--------------
{% for paper in year[1] %}
  <div class="row">
    <div class="paper-img">
      <img src="{{ paper.img }}" class="thumbnail" width="200" height="200" />
    </div>
    <div class="paper-text">
      <a href="{{ paper.link }}"><b>{{ paper.title }}</b></a> <span style="font-size:16px;"><i>{{ paper.where }}</i></span><br> 
      <span style="font-size:15px;"><i>{{ paper.authors }}</i></span> <br> 
      <a class="label label-info"> Abstract <span class="abstract">{{ paper.abstract }}</span> </a> &nbsp; 
      {% if paper.code and paper.code != '' %}
        <a href="{{ paper.code }}" class="label label-success">Code</a>
      {% endif %}
      {% if paper.blog and paper.blog != '' %}
        <a href="{{ paper.blog }}" class="label label-danger">Blog</a> 
      {% endif %}
      {% if paper.demo and paper.demo != '' %}
        <a href="{{ paper.demo }}" class="label label-warning">Demo</a>
      {% endif %}
    </div>
  </div>
{% endfor %}
{% endfor %}

