const shouldCreateCircle = (config, ring, beam) => {
  let output = false;
  let inRingFilters = false;
  let inBeamFilters = false;

  if (!config.ringsConfig) inRingFilters = true;
  if (config.ringsConfig) {
    for (let ringFilter of config.ringsConfig) {
      if (Array.isArray(ringFilter)) {
        if (ring >= ringFilter[0] && ring <= ringFilter[1])
          inRingFilters = true;
      }
      if (!isNaN(ringFilter) && ringFilter === ring) inRingFilters = true;
    }
  }

  if (!config.beamsConfig) inBeamFilters = true;
  if (config.beamsConfig) {
    for (let beamFilter of config.beamsConfig) {
      if (Array.isArray(beamFilter)) {
        if (beam >= beamFilter[0] && beam <= beamFilter[1])
          inBeamFilters = true;
      }
      if (!isNaN(beamFilter) && beamFilter === beam) inBeamFilters = true;
    }
  }

  return inRingFilters && inBeamFilters;
};

export function getCirclesForNumberOfBeams(numberOfBeams, config) {
  let area = 0;
  const output = [];
  const angle = Math.PI / numberOfBeams;
  const sinOfAngle = Math.sin(angle);
  const factor = (1 - sinOfAngle) / (1 + sinOfAngle);

  let distanceFromCenter = 1 / (1 + sinOfAngle);
  let radius = sinOfAngle / (1 + sinOfAngle);

  const maximumNumberOfBeams = config.maximumBeams
    ? Math.min(config.maximumBeams, numberOfBeams)
    : numberOfBeams;

  let ring = 0;
  while (radius > 0.0000001) {
    area += numberOfBeams * (Math.PI * radius * radius);
    for (let beam = 0; beam < maximumNumberOfBeams; beam++) {
      if (shouldCreateCircle(config, ring, beam)) {
        const cx = 1 + distanceFromCenter * Math.cos(angle * 2 * beam);
        const cy = 1 + distanceFromCenter * Math.sin(angle * 2 * beam);

        output.push({
          cy,
          cx,
          radius,
          beam,
          angle,
          ring,
          numberOfBeams,
          distanceFromCenter,
        });
      }
    }

    radius = radius * factor;
    distanceFromCenter = distanceFromCenter * factor;
    ring++;
  }

  console.log(area);
  return [];
}

export function getGridLines() {
  const horizontal = [];
  const vertical = [];
  const density = 20;

  for (let i = 0; i <= 2 * density; i++) {
    horizontal.push({
      x1: i / density,
      y1: 0,
      x2: i / density,
      y2: 2,
    });
    vertical.push({
      y1: i / density,
      x1: 0,
      y2: i / density,
      x2: 2,
    });
  }

  return horizontal.concat(vertical);
}
