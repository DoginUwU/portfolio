
import { Container } from './styles';

interface LoadingProps {
    isLoading?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading, children }) => {
    return isLoading ? (
      <Container>
        <h1>Loading... Please wait</h1>
      </Container>
    ) : (
            <>
                {children}
            </>
    );
};

export default Loading;