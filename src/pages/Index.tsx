
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirecionando para a Home com uma pequena animação visual
    const redirectTimeout = setTimeout(() => {
      navigate('/home');
    }, 100);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse-success">
        <div className="text-3xl font-bold text-gradient">
          CashBack System
        </div>
      </div>
    </div>
  );
};

export default Index;
