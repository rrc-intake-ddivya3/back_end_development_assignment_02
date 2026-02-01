import { Ticket, Priority, Status } from '../models/ticket.interface';

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

