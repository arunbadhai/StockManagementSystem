import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalAtmIcon />
      </ListItemIcon>
      <ListItemText primary="Transactions" />
    </ListItem>
    <Link to="/items"  style={{ textDecoration: 'none', color:'#000' }}>
        <ListItem button>
        <ListItemIcon>
            <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Items" />
        </ListItem>
    </Link>
    <Link to="/customers" style={{ textDecoration: 'none', color:'#000' }}>
        <ListItem button>
        <ListItemIcon>
            <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
        </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Productions" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText primary="Payments type" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);