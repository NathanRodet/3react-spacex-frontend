function WithListLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...launchesProps }) {
    if (!isLoading) return <Component {...launchesProps} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
export default WithListLoading;