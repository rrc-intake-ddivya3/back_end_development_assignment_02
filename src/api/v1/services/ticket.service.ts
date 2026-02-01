import { get } from 'node:http';
import { Ticket, Priority } from '../models/ticket.interface';

const tickets: Ticket[] = [];

const BASE_SCORE: Record<Priority, number> = {
    low: 10,
    medium: 20,
    high: 30,
    critical: 50,
};

export const createTicket = (title: string, description: string, priority: Priority): Ticket => {
    const newTicket: Ticket = {
        id: (tickets.length + 1).toString(),
        title,
        description,
        priority,
        status: 'open',
        createdAt: new Date().toISOString(),
    };
    tickets.push(newTicket);
    return newTicket;
}

export const getAllTickets = (): Ticket[] => {
    return tickets;
}   

export const getTicketById = (id: string): Ticket | undefined => {
    return tickets.find(ticket => ticket.id === id);
}

export const updateTicketStatus = (id: string,
    updates: Partial<Pick<Ticket, "title" | "description" | "priority" | "status">>): Ticket | undefined => {
        const ticket = getTicketById(id);
        if (!ticket) {
            return undefined;
        }
        Object.assign(ticket, updates);
        return ticket;
    }

export const deleteTicket = (id: string): boolean => {
    const index = tickets.findIndex(ticket => ticket.id === id);    
    if (index !== -1) {
        tickets.splice(index, 1);
        return true;
    }
    return false;
}


