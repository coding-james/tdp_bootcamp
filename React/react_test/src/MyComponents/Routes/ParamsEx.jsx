import { useParams } from 'react-router-dom';

function ParamsExample() {
  const params = useParams();
  console.log('PARAMS:', params);
  return (
    <p style={{ color: params.colour }}>
      {`Param: ${params.colour}`}
    </p>
  );
}

export default ParamsExample;