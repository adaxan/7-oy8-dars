import React from 'react';
import { TextField, Button, MenuItem, Box, IconButton } from '@mui/material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SendIcon from '@mui/icons-material/Send';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function App() {
  return (
    <Box sx={{
      maxWidth: 600, 
      mx: 'auto', 
      mt: 4, 
      p: 2, 
      border: '1px solid #ddd', 
      borderRadius: 3, 
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      bgcolor: '#f9f9f9'
    }}>
      <Box display="flex" justifyContent="center" mb={3} sx={{ borderBottom: '1px solid #e0e0e0', pb: 1 }}>
        <Button startIcon={<CurrencyExchangeIcon />} variant="contained" sx={{ mr: 1, bgcolor: '#2c3e50', color: '#fff', fontWeight: 'bold' }}>
          Convert
        </Button>
        <Button startIcon={<SendIcon />} sx={{ mr: 1, color: '#333' }}>Send</Button>
        <Button startIcon={<BarChartIcon />} sx={{ mr: 1, color: '#333' }}>Charts</Button>
        <Button startIcon={<NotificationsNoneIcon />} sx={{ color: '#333' }}>Alerts</Button>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <TextField
          label="Amount"
          variant="outlined"
          value="$1.00"
          sx={{ width: '30%' }}
        />
        <TextField
          select
          label="From"
          value="USD"
          sx={{ width: '30%' }}
        >
          <MenuItem value="USD">🇺🇸 USD - US Dollar</MenuItem>
        </TextField>
        <IconButton>
          <SyncAltIcon />
        </IconButton>
        <TextField
          select
          label="To"
          value="EUR"
          sx={{ width: '30%' }}
        >
          <MenuItem value="EUR">🇪🇺 EUR - Euro</MenuItem>
        </TextField>
      </Box>
      <Button variant="contained" fullWidth sx={{ bgcolor: '#007bff', color: '#fff', fontWeight: 'bold' }}>
        Convert
      </Button>
    </Box>
  );
}

export default App;
