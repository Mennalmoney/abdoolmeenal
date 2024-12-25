import { useState } from 'react';

interface CrudState<T> {
  items: T[];
  selectedItem: T | null;
  isEditing: boolean;
  isCreating: boolean;
}

export function useCrud<T extends { id: string }>(initialItems: T[] = []) {
  const [state, setState] = useState<CrudState<T>>({
    items: initialItems,
    selectedItem: null,
    isEditing: false,
    isCreating: false,
  });

  const create = (item: Omit<T, 'id'>) => {
    const newItem = { ...item, id: Math.random().toString(36).slice(2) } as T;
    setState((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
      isCreating: false,
    }));
  };

  const update = (id: string, updates: Partial<T>) => {
    setState((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      ),
      isEditing: false,
      selectedItem: null,
    }));
  };

  const remove = (id: string) => {
    setState((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const startEdit = (item: T) => {
    setState((prev) => ({
      ...prev,
      selectedItem: item,
      isEditing: true,
    }));
  };

  const startCreate = () => {
    setState((prev) => ({
      ...prev,
      isCreating: true,
    }));
  };

  const cancelEdit = () => {
    setState((prev) => ({
      ...prev,
      selectedItem: null,
      isEditing: false,
      isCreating: false,
    }));
  };

  return {
    ...state,
    create,
    update,
    remove,
    startEdit,
    startCreate,
    cancelEdit,
  };
}