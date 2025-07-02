import React from 'react';
import { ChevronDown, Users, Share2 } from 'lucide-react';

const SpreadsheetHeader: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      {/* Left side - Tabs */}
      <div className="flex items-center">
        <div className="flex items-center bg-gray-100 rounded-lg p-1">
          <button className="bg-white text-gray-900 px-3 py-1.5 rounded-md text-sm font-medium shadow-sm">
            Spreadsheet 1
          </button>
          <button className="text-gray-600 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50">
            +
          </button>
        </div>
      </div>

      {/* Right side - User avatars and share */}
      <div className="flex items-center space-x-3">
        {/* User avatars */}
        <div className="flex items-center -space-x-2">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-medium border-2 border-white">
            A
          </div>
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium border-2 border-white">
            A
          </div>
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-medium border-2 border-white">
            2
          </div>
        </div>

        {/* Share button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 hover:bg-blue-700">
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default SpreadsheetHeader;