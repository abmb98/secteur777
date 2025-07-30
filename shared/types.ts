export type UserRole = 'superadmin' | 'admin' | 'user';

export interface User {
  uid: string;
  email: string;
  role: UserRole;
  fermeId?: string;
  nom: string;
  telephone: string;
}

export interface Ferme {
  id: string;
  nom: string;
  totalChambres: number;
  totalOuvriers: number;
  admins: string[];
}

export interface Worker {
  id: string;
  nom: string;
  cin: string;
  fermeId: string;
  telephone: string;
  sexe: 'homme' | 'femme';
  age: number;
  yearOfBirth?: number; // Year of birth for age calculation
  chambre: string;
  secteur: string;
  dateEntree: string;
  dateSortie?: string;
  motif?: string;
  statut: 'actif' | 'inactif';
}

export interface Room {
  id: string;
  numero: string;
  fermeId: string;
  genre: 'hommes' | 'femmes';
  capaciteTotale: number;
  occupantsActuels: number;
  listeOccupants: string[];
}

export interface DashboardStats {
  totalOuvriers: number;
  totalChambres: number;
  chambresOccupees: number;
  placesRestantes: number;
  ouvriersHommes: number;
  ouvriersFemmes: number;
}

export interface StockItem {
  id: string;
  secteurId: string;
  secteurName?: string;
  item: string;
  quantity: number;
  unit: string;
  lastUpdated: string;
  minThreshold?: number;
  maxThreshold?: number;
  description?: string;
  category?: string;
  supplier?: string;
  cost?: number;
  location?: string;
  barcode?: string;
}

export interface StockTransfer {
  id: string;
  fromFermeId: string;
  fromFermeName?: string;
  toFermeId: string;
  toFermeName?: string;
  stockItemId: string;
  item: string;
  quantity: number;
  unit: string;
  status: 'pending' | 'confirmed' | 'in_transit' | 'delivered' | 'cancelled' | 'rejected';
  createdAt: any;
  confirmedAt?: any;
  deliveredAt?: any;
  rejectedAt?: any;
  transferredBy: string;
  transferredByName?: string;
  receivedBy?: string;
  receivedByName?: string;
  rejectedBy?: string;
  rejectedByName?: string;
  notes?: string;
  rejectionReason?: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  trackingNumber?: string;
  estimatedDelivery?: any;
}

export interface StockAddition {
  id: string;
  secteurId: string;
  secteurName?: string;
  item: string;
  quantity: number;
  unit: string;
  status: 'pending' | 'confirmed';
  addedBy: string;
  addedByName?: string;
  createdAt: any;
  confirmedAt: any;
  cost?: number;
  supplier?: string;
  batchNumber?: string;
  expiryDate?: any;
  notes?: string;
  invoiceNumber?: string;
}

export interface StockHistory {
  id: string;
  itemName: string;
  secteurId: string;
  secteurName: string;
  action: 'addition' | 'transfer_out' | 'transfer_in' | 'consumption' | 'adjustment' | 'receipt';
  quantity: number;
  unit: string;
  previousQuantity: number;
  newQuantity: number;
  performedBy: string;
  performedByName: string;
  timestamp: any;
  notes?: string;
  relatedId?: string;
}

export interface StockAlert {
  id: string;
  itemName: string;
  secteurId: string;
  secteurName: string;
  type: 'low_stock' | 'overstocked' | 'pending_receipt' | 'expiry_warning' | 'new_receipt';
  message: string;
  severity: 'info' | 'warning' | 'error';
  createdAt: any;
  acknowledged: boolean;
  acknowledgedBy?: string;
  acknowledgedAt?: any;
}

export interface TransferNotification {
  id: string;
  transferId: string;
  type: 'incoming_transfer' | 'transfer_confirmed' | 'transfer_rejected' | 'transfer_delivered';
  fromFermeId: string;
  fromFermeName: string;
  toFermeId: string;
  toFermeName: string;
  item: string;
  quantity: number;
  unit: string;
  message: string;
  status: 'unread' | 'read' | 'acknowledged';
  createdAt: any;
  readAt?: any;
  acknowledgedAt?: any;
  userId: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}
