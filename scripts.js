export function generateRandomMetricValue(metricSource) {
  if (Array.isArray(metricSource)) {
    metricSource.map((e) => {
      e.CPU = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      e.FS_Usage = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      e.Memory = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    });
  } else {
    metricSource.CPU = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    metricSource.FS_Usage = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    metricSource.Memory = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  }
  return metricSource;
}
