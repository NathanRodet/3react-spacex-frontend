// Not in use yet.

export default function dataLoader(isLoading, data) {
  if ((!data || data.length === 0) && (isLoading === true)) {
    return (
      <h3 id="Launch-head">Wait ! fetching data may take some time ! :)</h3>
    )
  } else if ((!data || data.length === 0)) {
    <h3 id="Launch-head">There is no launch details to display, sorry</h3>
  }
  return isLoading
}

