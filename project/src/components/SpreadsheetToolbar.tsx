import React from 'react';
import { 
  EyeOff, 
  ArrowUpDown, 
  Filter, 
  Grid3X3, 
  Search, 
  Download, 
  Share2, 
  Plus 
} from 'lucide-react';

const SpreadsheetToolbar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left side - View controls */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">100 Rows</span>
          
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900">
              <EyeOff className="w-4 h-4" />
              <span>Hide fields</span>
            </button>
            
            <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900">
              <ArrowUpDown className="w-4 h-4" />
              <span>Sort</span>
            </button>
            
            <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            
            <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900">
              <Grid3X3 className="w-4 h-4" />
              <span>Cell view</span>
            </button>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search within table..."
              className="text-sm border-none outline-none bg-transparent placeholder-gray-400"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-1.5 text-gray-600 hover:text-gray-900">
              <Download className="w-4 h-4" />
            </button>
            <button className="p-1.5 text-gray-600 hover:text-gray-900">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
          
          <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium flex items-center space-x-1 hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            <span>New Action</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetToolbar;