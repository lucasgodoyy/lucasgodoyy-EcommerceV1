// pages/admin/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from "@/components/admin/Sidebar";
import { Box, Typography } from '@mui/material';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); // redireciona se não estiver logado
    }
  }, []);

  return (
   
        <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4">Bem-vindo ao Painel Admin</Typography>
        {/* Conteúdo do dashboard aqui */}
      </Box>
    </Box>
     
      
    
  );
}
