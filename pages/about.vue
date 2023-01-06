<template>
  <section>
    <div class="content notification is-info is-light">
      <p>
        The concept of Career Informatics was created in 2012 by a startup
        called Career Boot Camp Coaches, LLC. The vision of Career Boot Camp
        Coaches was to empower and inspire individuals to harness their career
        potential.
      </p>
      <p>
        The first product of Career Boot Camp Coaches was a two-day career
        workshop designed to equip individuals with the knowledge to create a
        realistic written career plan. Workshop topics were organized around
        self-discovery and self-direction, relying on activities such as
        <a
          href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator"
          >MBTI</a
        >,
        <a href="http://www.wiley.com/WileyCDA/Section/id-822141.html"
          >Career Anchors</a
        >, Mind mapping, SWOT, and career roadmap creation.
      </p>
      <p>
        After a couple of years, the startup shifted focus and pivoted to
        creating a digital career coach that integrated with
        <a href="https://indeed.com/">Indeed.com</a> and
        <a href="https://www.linkedin.com/">LinkedIn</a>. The digital coach took
        concepts from the boot camp and created digital versions. Some of the
        original tools are embedded in the current version of
        CareerInformatics.com today, being supported by one of the original
        members currently part of Spero Autem LLC.
      </p>
      <p>
        This current site exists to honor the original Career Boot Camp Coaches'
        vision to empower and inspire individuals to harness their career
        potential.
      </p>
    </div>
    <div class="columns is-centered">
        <div class="column is-3">
                <b-image
          :src="require('@/static/images/CBC_Small.png')"
          alt="Career Boot Camp Coaches Logo"
        ></b-image>
      </div>
      <div class="column is-3">
        <b-image
          :src="require('@/static/images/Spero Autem-logos_transparent4x3.png')"
          alt="Spero Autem LLC Logo"
        ></b-image>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  head () {
    return {
      title: 'About',
      meta: [
        {
          name: 'description',
          hid: 'description',
          content:
            'This current site exists to honor the original Career Boot Camp Coaches vision to empower and inspire individuals to harness their career potential.'
        }
      ]
    }
  }
}
</script>
