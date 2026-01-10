---
layout: page
title: repositories
permalink: /repositories/
description: A curated collection of my open-source projects and contributions
nav: true
nav_order: 4
---

<!-- pages/repositories.md -->
<div class="repositories">

{% if site.data.repositories.repositories.size > 0 %}
  <!-- Display manually curated repositories from _data/repositories.yml -->
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
  {% for repo in site.data.repositories.repositories %}
    <div class="col mb-4">
      <div class="card h-100">
        {% if repo.thumbnail %}
        <img src="{{ repo.thumbnail | relative_url }}" class="card-img-top" alt="{{ repo.name }}">
        {% endif %}
        <div class="card-body">
          <h5 class="card-title">
            <a href="{{ repo.url }}" target="_blank" rel="noopener noreferrer">{{ repo.name }}</a>
          </h5>
          <p class="card-text">{{ repo.description }}</p>
          {% if repo.language %}
          <p class="card-text">
            <small class="text-muted">
              <i class="fas fa-code"></i> {{ repo.language }}
              {% if repo.stars %}
                | <i class="fas fa-star"></i> {{ repo.stars }}
              {% endif %}
            </small>
          </p>
          {% endif %}
          {% if repo.tags %}
          <div class="tags">
            {% for tag in repo.tags %}
              <span class="badge bg-primary">{{ tag }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>
        <div class="card-footer">
          <a href="{{ repo.url }}" class="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i> View on GitHub
          </a>
        </div>
      </div>
    </div>
  {% endfor %}
  </div>
{% else %}
  <!-- Empty state when no repositories are defined -->
  <div class="alert alert-info" role="alert">
    <h4 class="alert-heading">No repositories yet!</h4>
    <p>Add your repositories to <code>_data/repositories.yml</code> to display them here.</p>
    <hr>
    <p class="mb-0">See the example format in the file for guidance on how to add your projects.</p>
  </div>
{% endif %}

<!-- Link to full GitHub profile -->
<div class="text-center mt-4">
  {% if site.data.socials.github_username %}
  <a href="https://github.com/{{ site.data.socials.github_username }}" class="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-github"></i> View all repositories on GitHub
  </a>
  {% endif %}
</div>

</div>
