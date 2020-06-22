import qs from "qs";

export function parseConfigFromQueryString() {
  const output = {};
  const querystring = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });

  if (querystring) {
    // Parse beams configuration
    if (querystring.beams) {
      output.beams = querystring.beams
        .split(",")
        .map((beam) => {
          return Number.parseInt(beam);
        })
        .filter((beam) => !isNaN(beam));
    }

    // Parse rings configuration
    if (querystring.ringsConfig) {
      output.ringsConfig = querystring.ringsConfig
        .split(",")
        .map((ring) => {
            console.log(ring)
          if (ring.indexOf("-") > -1) {
            const range = ring
              .split("-")
              .map((ring) => Number.parseInt(ring))
              .filter((ring) => !isNaN(ring));
            if (range.length === 2) return range;
          }

          return Number.parseInt(ring);
        })
        .filter((ring) => { 
            if(Array.isArray(ring)) return true;
            return !isNaN(ring)
        });
    }

    // Parse rings configuration
    if (querystring.beamsConfig) {
      output.beamsConfig = querystring.beamsConfig
        .split(",")
        .map((beam) => {
            console.log(beam)
          if (beam.indexOf("-") > -1) {
            const range = beam
              .split("-")
              .map((beam) => Number.parseInt(beam))
              .filter((beam) => !isNaN(beam));
            if (range.length === 2) return range;
          }

          return Number.parseInt(beam);
        })
        .filter((beam) => { 
            if(Array.isArray(beam)) return true;
            return !isNaN(beam)
        });
    }
  }

  return output;
}
